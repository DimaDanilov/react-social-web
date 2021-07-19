import style from './PostComponent.module.css'
import AddPost from './AddPost/AddPost'
import PostList from './PostList/PostList'

function PostComponent() {
    return (
        <div className={style.container}>
            <AddPost />
            <PostList />
        </div>
    )
}

export default PostComponent;