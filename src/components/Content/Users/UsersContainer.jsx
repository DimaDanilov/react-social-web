import { connect } from 'react-redux'
import Users from './Users'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersAmountAC } from '../../../redux/users-reducer'

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        usersAmount: state.usersPage.usersAmount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)); },
        unfollow: (userId) => { dispatch(unfollowAC(userId)); },
        setUsers: (users) => { dispatch(setUsersAC(users)); },
        setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)) },
        setTotalUsersAmount: (usersAmount) => {dispatch(setTotalUsersAmountAC(usersAmount))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer