import style from './PostList.module.css'
import Post from './Post/Post'

function PostList(props) {
    // Перевод данных постов в компоненты
    let postsElements = props.post_content.map((post) => <Post message={post.message} avatar={post.avatar} />)

    return (
        <div className={style.container}>
            {postsElements}
        </div>
    )
}

export default PostList;