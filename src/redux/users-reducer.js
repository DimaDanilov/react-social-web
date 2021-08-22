// State для инициализации
let initialState = {
    // Данные пользователей
    usersData: [ ]
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
            return { ...state, usersData: [...state.usersData, ...action.usersData] }
        default:
            return state;
    }
}

// Action-creator'ы для выполнения нужного dispatch (здесь не выполняются, посылаются в UI в компоненту Users)
export const followAC = (userId) => ({ type: "FOLLOW", userId })
export const unfollowAC = (userId) => ({ type: "UNFOLLOW", userId })
export const setUsersAC = (usersData) => ({ type: "SET-USERS", usersData })

export default usersReducer