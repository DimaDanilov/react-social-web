import style from './Users.module.css'
import defaultUserPhoto from '../../../img/icons/user_default.svg'

const Users = (props) => {
    let pages = props.pagesListing(props.usersAmount, props.pageSize, props.currentPage)

    return (
        <div>
            {/* Pagination - Список страниц пользователей */}
            <div className={style.pages_list}>
                {pages.map(
                    page =>
                        <span
                            className={[props.currentPage === page && style.selectedPage, style.pageIcon].join(' ')}
                            onClick={() => props.onPageChanged(page)}>
                            {page}
                        </span>
                )}
            </div>
            {/* Карточки пользователей */}
            <div className={style.users_container}>
                {
                    props.usersData.map((user) =>
                        <div key={user.id} className={style.user_card}>
                            <div className={style.img_container}>
                                {/* Проверка наличия картинки в response. При отсутствии вывод заглушки */}
                                <img src={user.photos.small != null ? user.photos.small : defaultUserPhoto} alt="" />
                                {/* Кнопка и её контент в зависимости от response */}
                                {user.followed
                                    ? <button className={style.button} onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                    : <button className={style.button} onClick={() => { props.follow(user.id) }}>Follow</button>
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

export default Users