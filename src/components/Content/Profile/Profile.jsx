import background_profile from '../../../img/back_1.jpg'
import PostComponent from './PostComponent/PostComponent'
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
    return (
        <div className={style.profile}>
            <div className={style.profile__background_wrapper}>
                <img src={background_profile} alt='' className={style.profile__background} />
            </div>

            <div className={style.profile__text_wrapper}>
                <ProfileInfo />
                <PostComponent post_content={props.post_content} />
            </div>
        </div>
    )
}

export default Profile;