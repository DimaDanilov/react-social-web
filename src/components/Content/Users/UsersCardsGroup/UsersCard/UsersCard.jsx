import style from './UsersCard.module.css'
import defaultUserPhoto from '../../../../../img/icons/user_default.svg'


const UsersCard = (props) => {
    return (
        <div key={props.user.id} className={style.user_card}>
            <div className={style.img_container}>
                {/* Проверка наличия картинки в response. При отсутствии вывод заглушки */}
                <img src={props.user.photos.small != null ? props.user.photos.small : defaultUserPhoto} alt="" />
                {/* Кнопка и её контент в зависимости от response */}
                {props.user.followed
                    ? <button className={style.button} onClick={() => { props.unfollow(props.user.id) }}>Unfollow</button>
                    : <button className={style.button} onClick={() => { props.follow(props.user.id) }}>Follow</button>
                }
            </div>
            <div className={style.user_info}>
                <h2>{props.user.name}</h2>
                <p>{props.user.status}</p>
            </div>
        </div>
    )
}

export default UsersCard