import style from './UserElement.module.css'

const UserElement = (props) => {

    return (
        <div className={style.user}>
            <p className={style.user_name}>{props.name}</p>
        </div>
    )
}

export default UserElement