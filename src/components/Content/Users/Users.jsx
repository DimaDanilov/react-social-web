import style from './Users.module.css'
import avatar1 from '../../../img/avatar/avatar_1.jpg'

const Users = (props) => {

    if (props.usersData.length === 0)
        props.setUsers([
            { id: 1, fullName: "Dima Danilov", followed: false, status: "I love every day!", location: { city: "Moscow", country: "Russia" }, avatar: avatar1 },
            { id: 2, fullName: "Ivan Pivov", followed: true, status: "In search for adventure!", location: { city: "Volgograd", country: "Russia" }, avatar: avatar1 },
            { id: 3, fullName: "Kirill Pelevin", followed: false, status: "Almost find my hobby!", location: { city: "Kiev", country: "Ukraine" }, avatar: avatar1 },
            { id: 4, fullName: "Alexey Martirosyan", followed: false, status: "Love my new dog!", location: { city: "Berlin", country: "Germany" }, avatar: avatar1 },
        ])


    return (
        <div className={style.users_container}>
            {
                props.usersData.map((user) =>
                    <div key={user.id} className={style.user_card}>
                        <div className={style.img_container}>
                            <img src={user.avatar} />
                            {user.followed
                                ? <button className={style.button} onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                : <button className={style.button} onClick={() => { props.follow(user.id) }}>Follow</button>
                            }
                        </div>
                        <div className={style.user_info}>
                            <h2>{user.fullName}</h2>
                            <p>{user.status}</p>
                        </div>
                        <div className={style.user_location}>
                            <h3>{user.location.city}</h3>
                            <h3>{user.location.country}</h3>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users