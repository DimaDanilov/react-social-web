import style from './PostList.module.css'
import Post from './Post/Post'
import defaultUserPhoto from '../../../../../img/icons/user_default.svg'

function PostList(props) {
    // Выбор изображения в зависимости от пропсов
    let selectPicture = (profile) => {
        if (profile) {
            if (profile.photos.small)
                return profile.photos.small;
            else return defaultUserPhoto;
        }
        else return defaultUserPhoto;
    }

    // Перевод данных постов в компоненты
    let postsElements = props.postContent.map((post) => <Post key={post.id} message={post.message} profileImg={selectPicture(props.profileData)} />)

    return (
        <div className={style.container}>
            {postsElements}
        </div>
    )
}

export default PostList;