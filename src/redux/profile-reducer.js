// State для инициализации
let initialState = {
    // Контент постов
    postContent: [
        { id: 1, message: "Hi, this is my profile!" },
        { id: 2, message: "Today I made an amazing coffee! Learned to cook cappuccino. I love it :)" },
        { id: 3, message: "Good morning everybody! It's very beautiful sunny day ^^" },
    ],
    // Текст в форме для нового поста
    newPostText: "",
    profileData: null,
    isLoading: true
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = { id: 4, message: state.newPostText };
            return {
                ...state,
                postContent: [...state.postContent, newPost],
                newPostText: ''
            }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        case "SET-USER-PROFILE":
            return {
                ...state,
                profileData: action.profileData
            }
        case "SET-LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

// Action-creator'ы для выполнения нужного dispatch (здесь не выполняются, посылаются в UI в компоненту PostForm)
export const addPost = () => ({ type: "ADD-POST" });
export const updateNewPostText = (areaText) => ({ type: "UPDATE-NEW-POST-TEXT", newText: areaText });
export const setUserProfile = (profileData) => ({ type: "SET-USER-PROFILE", profileData });
export const setLoading = (isLoading) => ({ type: "SET-LOADING", isLoading });


export default profileReducer