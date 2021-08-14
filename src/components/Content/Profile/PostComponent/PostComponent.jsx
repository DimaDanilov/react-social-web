import style from './PostComponent.module.css'
import PostFormContainer from './PostForm/PostFormContainer'
import PostListContainer from './PostList/PostListContainer'

function PostComponent(props) {
    return (
        <div className={style.container}>
            <h2>Моя стена</h2>
            <h3>Добавить пост</h3>
            <PostFormContainer />
            <PostListContainer />
        </div>
    )
}

export default PostComponent;