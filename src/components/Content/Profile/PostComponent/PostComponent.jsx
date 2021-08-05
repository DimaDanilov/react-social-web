import style from './PostComponent.module.css'
import PostForm from './PostForm/PostForm'
import PostList from './PostList/PostList'

function PostComponent(props) {
    return (
        <div className={style.container}>
            <h2>Моя стена</h2>
            <h3>Добавить пост</h3>
            <PostForm newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
            <PostList postContent={props.profilePage.postContent} />
        </div>
    )
}

export default PostComponent;