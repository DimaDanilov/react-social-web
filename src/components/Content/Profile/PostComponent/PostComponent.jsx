import style from './PostComponent.module.css'
import PostFormContainer from './PostForm/PostFormContainer'
import PostList from './PostList/PostList'

function PostComponent(props) {
    return (
        <div className={style.container}>
            <h2>Моя стена</h2>
            <h3>Добавить пост</h3>
            <PostFormContainer store={props.store} />
            <PostList store={props.store}  />
        </div>
    )
}

export default PostComponent;