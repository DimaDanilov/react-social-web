import style from './UsersPagination.module.css'

const UsersPagination = (props) => {
    let pages = props.pagesListing(props.usersAmount, props.pageSize, props.currentPage)

    return (
        <div className={style.pages_list}>
            {pages.map(
                page =>
                    <span
                        key={page}
                        className={[props.currentPage === page && style.selectedPage, style.pageIcon].join(' ')}
                        onClick={() => props.onPageChanged(page)}>
                        {page}
                    </span>
            )}
        </div>
    )
}

export default UsersPagination;