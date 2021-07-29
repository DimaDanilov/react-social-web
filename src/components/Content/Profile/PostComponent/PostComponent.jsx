import style from './PostComponent.module.css'
import AddPost from './AddPost/AddPost'
import PostList from './PostList/PostList'

function PostComponent(props) {
    return (
        <div className={style.container}>
            <AddPost />
            <PostList post_content={props.post_content} />
        </div>
    )
}

export default PostComponent;