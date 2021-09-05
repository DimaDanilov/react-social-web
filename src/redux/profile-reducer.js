import avatar1 from '../img/avatar/avatar_1.jpg'

// State для инициализации
let initialState = {
    // Контент постов
    postContent: [
        { id: 1, message: "Hi, this is my profile!", avatar: avatar1 },
        { id: 2, message: "Today I made an amazing coffee! Learned to cook cappuccino. I love it :)", avatar: avatar1 },
        { id: 3, message: "Good morning everybody! It's very beautiful sunny day ^^", avatar: avatar1 },
    ],
    // Текст в форме для нового поста
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = { id: 4, message: state.newPostText, avatar: avatar1 };
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
        default:
            return state;
    }
}

// Action-creator'ы для выполнения нужного dispatch (здесь не выполняются, посылаются в UI в компоненту PostForm)
export const addPost = () => ({ type: "ADD-POST" })
export const updateNewPostText = (areaText) => ({ type: "UPDATE-NEW-POST-TEXT", newText: areaText })


export default profileReducer