import style from './PostComponent.module.css'
import PostForm from './PostForm/PostForm'
import PostList from './PostList/PostList'

function PostComponent(props) {
    return (
        <div className={style.container}>
            <h2>Моя стена</h2>
            <h3>Добавить пост</h3>
            <PostForm NewPostText={props.ProfilePage.NewPostText} dispatch={props.dispatch} />
            <PostList post_content={props.ProfilePage.post_content} />
        </div>
    )
}

export default PostComponent;