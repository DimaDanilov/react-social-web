import PostForm from './PostForm'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/profile-reducer'


function PostFormContainer(props) {
    let state = props.store.getState();

    // Добавление поста. Вызывается в PostForm, отправляет action типа "ADD-POST"
    let addPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action);
    }

    // Обновление формы добавления поста. Вызывается в PostForm, отправляет action типа "UPDATE-NEW-POST-TEXT"
    let postChange = (areaText) => {
        let action = updateNewPostTextActionCreator(areaText)
        props.store.dispatch(action);
    }

    return (
        <PostForm addPost={addPost} postChange={postChange} newPostText={state.profilePage.newPostText} />
    )
}

export default PostFormContainer;