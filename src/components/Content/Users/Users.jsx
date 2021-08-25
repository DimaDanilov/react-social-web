import React from 'react';
import style from './Users.module.css'
import avatar1 from '../../../img/avatar/avatar_1.jpg'
import axios from 'axios'

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return (
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
        )
    }
}

export default Users