import React from 'react';
import style from './Users.module.css'
import avatar1 from '../../../img/icons/user_default.svg'
import axios from 'axios'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersAmount(response.data.totalCount);
        })
    }

    onPageChanged(pageNumber) {
        if (Number.isInteger(pageNumber)) /* Проверка на число (защита от кнопки "...") */
            this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }


    // Функция отвечающая за поведение переключения страниц
    pagesListing(usersAmount, pageSize, currentPage) {
        // Рассчет итогового количества страниц
        let pagesCount = Math.ceil(usersAmount / pageSize);

        // Возвращение массива списка страниц
        if (pagesCount >= 6) {
            switch (currentPage) {
                case 1:
                case 2:
                case 3:
                    return [1, 2, 3, 4, 5, 6, "...", pagesCount];
                case pagesCount:
                case pagesCount - 1:
                case pagesCount - 2:
                    return [1, "...", pagesCount - 5, pagesCount - 4, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount];
                default:
                    return [1, "...", currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, "...", pagesCount];
            }
        } else return [1, 2, 3, 4, 5];
    }

    render() {

        let pages = this.pagesListing(this.props.usersAmount, this.props.pageSize, this.props.currentPage)

        return (
            <div>
                {/* Pagination - Список страниц пользователей */}
                <div className={style.pages_list}>
                    {pages.map(
                        page =>
                            <span
                                className={[this.props.currentPage === page && style.selectedPage, style.pageIcon].join(' ')}
                                onClick={() => this.onPageChanged(page)}>
                                {page}
                            </span>
                    )}
                </div>
                {/* Карточки пользователей */}
                <div className={style.users_container}>
                    {
                        this.props.usersData.map((user) =>
                            <div key={user.id} className={style.user_card}>
                                <div className={style.img_container}>
                                    {/* Проверка наличия картинки в response. При отсутствии вывод заглушки */}
                                    <img src={user.photos.small != null ? user.photos.small : avatar1} />
                                    {/* Кнопка и её контент в зависимости от response */}
                                    {user.followed
                                        ? <button className={style.button} onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                                        : <button className={style.button} onClick={() => { this.props.follow(user.id) }}>Follow</button>
                                    }
                                </div>
                                <div className={style.user_info}>
                                    <h2>{user.name}</h2>
                                    <p>{user.status}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Users