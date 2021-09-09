import style from './UsersCardsGroup.module.css'
import UsersCard from './UsersCard/UsersCard'

const UsersCardsGroup = (props) => {
    return (

        < div className={style.users_container} >
            {
                props.usersData.map((user) =>
                    /* Карточки пользователей */
                    <UsersCard user={user} follow={props.follow} unfollow={props.unfollow} />
                )
            }
        </div >
    )
}

export default UsersCardsGroup;