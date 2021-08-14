import PostForm from './PostForm'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/profile-reducer'
import StoreContext from '../../../../../StoreContext';


function PostFormContainer(props) {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();

                // Добавление поста. Вызывается в PostForm, отправляет action типа "ADD-POST"
                let addPost = () => {
                    let action = addPostActionCreator()
                    store.dispatch(action);
                }

                // Обновление формы добавления поста. Вызывается в PostForm, отправляет action типа "UPDATE-NEW-POST-TEXT"
                let postChange = (areaText) => {
                    let action = updateNewPostTextActionCreator(areaText)
                    store.dispatch(action);
                }
                return <PostForm addPost={addPost} postChange={postChange} newPostText={state.profilePage.newPostText} />
            }
        }
    </StoreContext.Consumer>
}

export default PostFormContainer;