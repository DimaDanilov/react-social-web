import UsersPagination from './UsersPagination/UsersPagination'
import UsersCardsGroup from './UsersCardsGroup/UsersCardsGroup'

const Users = (props) => {
    return (
        <div>
            {/* Pagination - Список страниц пользователей */}
            <UsersPagination
                usersAmount={props.usersAmount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                pagesListing={props.pagesListing}
                onPageChanged={props.onPageChanged}
            />
            {/* Контейнер для карточек пользователей */}
            <UsersCardsGroup
                usersData={props.usersData}
                follow={props.follow}
                unfollow={props.unfollow}
            />
        </div>
    )
}

export default Users