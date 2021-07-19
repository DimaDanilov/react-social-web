import style from './PostList.module.css'
import Post from './Post/Post'
import avatar1 from '../../../../../img/avatar/avatar_1.jpg'

function PostList() {
    return (
        <div className={style.container}>
            <Post message="Hi, this is my profile!" avatar={avatar1} />
            <Post message="Today I made an amazing coffee! Learned to cook cappuccino. I love it :)" avatar={avatar1} />
            <Post message="Good morning everybody! It's very beautiful sunny day ^^" avatar={avatar1} />
        </div>
    )
}

export default PostList;