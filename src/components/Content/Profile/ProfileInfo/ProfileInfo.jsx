import Preloader from '../../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css'
import defaultUserPhoto from '../../../../img/icons/user_default.svg'
import facebookIcon from '../../../../../src/img/icons/social/facebook.svg'
import websiteIcon from '../../../../../src/img/icons/social/website.svg'
import vkIcon from '../../../../../src/img/icons/social/vk.svg'
import twitterIcon from '../../../../../src/img/icons/social/twitter.svg'
import instagramIcon from '../../../../../src/img/icons/social/instagram.svg'
import youtubeIcon from '../../../../../src/img/icons/social/youtube.svg'
import githubIcon from '../../../../../src/img/icons/social/github.svg'
import mainLinkIcon from '../../../../../src/img/icons/social/main_link.svg'



function ProfileInfo(props) {
    // Выбор изображения в зависимости от пропсов(большое или default)
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
        // Иконки социальных сетей
        const socialItems = [
            {
                name: "facebook",
                icon: facebookIcon,
                url: props.profileData.contacts.facebook
            },
            {
                name: "website",
                icon: websiteIcon,
                url: props.profileData.contacts.website
            },
            {
                name: "vk",
                icon: vkIcon,
                url: props.profileData.contacts.vk
            },
            {
                name: "twitter",
                icon: twitterIcon,
                url: props.profileData.contacts.twitter
            },
            {
                name: "instagram",
                icon: instagramIcon,
                url: props.profileData.contacts.instagram
            },
            {
                name: "youtube",
                icon: youtubeIcon,
                url: props.profileData.contacts.youtube
            },
            {
                name: "github",
                icon: githubIcon,
                url: props.profileData.contacts.github
            },
            {
                name: "mainLink",
                icon: mainLinkIcon,
                url: props.profileData.contacts.mainLink
            }
        ]
        const socialWebElements = socialItems.map((social) => {
            if (social.url)
                return <a key={social.name} href={"https://" + social.url}>
                    <img className={style.social_icon} src={social.icon} alt='' />
                </a>
        })

        return (<div className={style.profile_wrapper}>
            <img className={style.profile_main_img} src={selectPicture(props.profileData)} alt='' />
            <div>
                <h1>{props.profileData.fullName}</h1>
                <i>{props.profileData.aboutMe}</i>
                <p>{props.profileData.lookingForAJobDescription}</p>
                <div className={style.social_icon_container}>
                    {socialWebElements}
                </div>
            </div>
        </div>
        )
    }
}

export default ProfileInfo;