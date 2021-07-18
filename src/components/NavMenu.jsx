import user from '../logo/user.svg'
import messages from '../logo/email.svg'
import news from '../logo/newspaper.svg'
import music from '../logo/music.svg'
import settings from '../logo/settings.svg'
import style from './NavMenu.module.css'

function NavMenu() {
    return (
        <div className={style.nav}>
            <div className={style.nav_menu}>
                <div className={style.nav_el}>
                    <img className={style.icon} alt='' src={user} />
                    <span className={style.nav_el__text}>Профиль</span>
                </div>
                <div className={style.nav_el}>
                    <img className={style.icon} alt='' src={messages} />
                    <span className={style.nav_el__text}>Сообщения</span>
                </div>
                <div className={style.nav_el}>
                    <img className={style.icon} alt='' src={news} />
                    <span className={style.nav_el__text}>Новости</span>
                </div>
                <div className={style.nav_el}>
                    <img className={style.icon} alt='' src={music} />
                    <span className={style.nav_el__text}>Музыка</span>
                </div>
                <div className={style.nav_el}>
                    <img className={style.icon} alt='' src={settings} />
                    <span className={style.nav_el__text}>Настройки</span>
                </div>
            </div>
        </div>
    )
}

export default NavMenu;