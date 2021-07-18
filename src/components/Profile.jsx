import background_profile from '../img/back_1.jpg'
import style from './Profile.module.css'

function Profile() {
    return (
        <div className={style.content}>
            <div className={style.profile__background_wrapper}>
                <img src={background_profile} alt='' className={style.profile__background} />
            </div>
            <h1>ava+description</h1>
            <h1>My post</h1>
            <h1>New post</h1>
            <h1>Post 1</h1>
            <h1>Post 2</h1>
        </div>
    )
}

export default Profile;