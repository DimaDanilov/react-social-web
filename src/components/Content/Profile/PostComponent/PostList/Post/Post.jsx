import style from './Post.module.css'

function Post(props) {
    return (
        <div className={style.post_container}>
            <img className={style.img} alt='' src={props.profileImg} />
            <p className={style.message}>{props.message}</p>
        </div>
    )
}

export default Post;