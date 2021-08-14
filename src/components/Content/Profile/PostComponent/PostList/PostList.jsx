import style from './PostList.module.css'
import Post from './Post/Post'

function PostList(props) {
    let state = props.state;

    // Перевод данных постов в компоненты
    let postsElements = state.profilePage.postContent.map((post) => <Post message={post.message} avatar={post.avatar} />)

    return (
        <div className={style.container}>
            {postsElements}
        </div>
    )
}

export default PostList;