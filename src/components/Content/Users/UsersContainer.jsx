import React from 'react';
import axios from 'axios'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersAmount } from '../../../redux/users-reducer'

class UsersContainerAPI extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersAmount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        /* Проверка на число (защита от кнопки "...") */
        if (Number.isInteger(pageNumber)) {
            this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            })
        }
    }

    // Функция отвечающая за поведение переключения страниц
    pagesListing = (usersAmount, pageSize, currentPage) => {
        // Рассчет итогового количества страниц
        let pagesCount = Math.ceil(usersAmount / pageSize);

        // Возвращение массива списка страниц
        if (pagesCount >= 6) {
            switch (currentPage) {
                case 1:
                case 2:
                case 3:
                    return [1, 2, 3, 4, 5, 6, "...", pagesCount];
                case pagesCount:
                case pagesCount - 1:
                case pagesCount - 2:
                    return [1, "...", pagesCount - 5, pagesCount - 4, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount];
                default:
                    return [1, "...", currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, "...", pagesCount];
            }
        } else if (0 < pagesCount && pagesCount < 6) {
            let pageList = [];
            for (let i = 1; i <= pagesCount; i++) {
                pageList.push(i);
            }
            return pageList;
        } else return [];
    }

    render() {
        return <Users
            onPageChanged={this.onPageChanged}
            pagesListing={this.pagesListing}
            usersAmount={this.props.usersAmount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            usersData={this.props.usersData}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        usersAmount: state.usersPage.usersAmount,
        currentPage: state.usersPage.currentPage
    }
}

const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersAmount })(UsersContainerAPI)

export default UsersContainer