// State для инициализации
let initialState = {
    // Данные пользователей
    usersData: [],
    pageSize: 10,
    usersAmount: 1,
    currentPage: 1,
    isLoading: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        case "SET-USERS":
            return { ...state, usersData: [...action.usersData] }
        case "SET-CURRENT-PAGE":
            return { ...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-AMOUNT":
            return { ...state, usersAmount: action.usersAmount}
        case "SET-LOADING":
            return { ...state, isLoading: action.isLoading}
        default:
            return state;
    }
}

// Action-creator'ы для выполнения нужного dispatch (здесь не выполняются, посылаются в UI в компоненту Users)
export const follow = (userId) => ({ type: "FOLLOW", userId })
export const unfollow = (userId) => ({ type: "UNFOLLOW", userId })
export const setUsers = (usersData) => ({ type: "SET-USERS", usersData })
export const setCurrentPage = (currentPage) => ({ type: "SET-CURRENT-PAGE", currentPage })
export const setTotalUsersAmount = (usersAmount) => ({ type: "SET-TOTAL-USERS-AMOUNT", usersAmount })
export const setLoading = (isLoading) => ({ type: "SET-LOADING", isLoading })

export default usersReducer