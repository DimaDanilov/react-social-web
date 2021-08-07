import avatar1 from '../img/avatar/avatar_1.jpg'

const profileReducer = (state, action) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 4,
                message: state.newPostText,
                avatar: avatar1
            };
            state.postContent.push(newPost);
            state.newPostText = '';
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

// Action-creator'ы для выполнения нужного dispatch (здесь не выполняются, посылаются в UI в компоненту PostForm)
export const addPostActionCreator = () => ({ type: "ADD-POST" })
export const updateNewPostTextActionCreator = (areaText) => ({ type: "UPDATE-NEW-POST-TEXT", newText: areaText })


export default profileReducer