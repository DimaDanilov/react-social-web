import Preloader from '../../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css'
import defaultUserPhoto from '../../../../img/icons/user_default.svg'


function ProfileInfo(props) {
    // Выбор изображения в зависимости от пропсов
    let selectPicture = (profile) => {
        if (profile) {
            if (profile.photos.large)
                return profile.photos.large;
            else return defaultUserPhoto;
        }
        else return defaultUserPhoto;
    }

    if (!props.profileData)
        return <Preloader />
    else {
        return (<div className={style.profile_wrapper}>
            <img className={style.profile_main_img} src={selectPicture(props.profileData)} alt='' />
            <div>
                <h1>{props.profileData.fullName}</h1>
                <i>{props.profileData.aboutMe}</i>
                <p>{props.profileData.lookingForAJobDescription}</p>
            </div>
        </div>
        )
    }
}

export default ProfileInfo;