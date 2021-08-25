import style from './Users.module.css'
import avatar1 from '../../../img/avatar/avatar_1.jpg'
import axios from 'axios'

const Users = (props) => {

    let getUsers = () => {
        if (props.usersData.length === 0)
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div className={style.users_container}>
            <button onClick={getUsers}>GET USERS</button>
            {
                props.usersData.map((user) =>
                    <div key={user.id} className={style.user_card}>
                        <div className={style.img_container}>
                            {/* Проверка наличия картинки в response. При отсутствии вывод заглушки */}
                            <img src={user.photos.small != null ? user.photos.small : avatar1} />
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
    )
}

export default Users