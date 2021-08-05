import user from '../../img/logo/user.svg'
import messages from '../../img/logo/email.svg'
import news from '../../img/logo/newspaper.svg'
import music from '../../img/logo/music.svg'
import settings from '../../img/logo/settings.svg'
import style from './NavMenu.module.css'
import NavItem from './NavItem/NavItem'

function NavMenu() {
    return (
        <div className={style.nav}>
            <div className={style.nav_menu}>
                <NavItem linkImg={user} linkText="Профиль" link="/profile" />
                <NavItem linkImg={messages} linkText="Сообщения" link="/messages" />
                <NavItem linkImg={news} linkText="Новости" link="/news"/>
                <NavItem linkImg={music} linkText="Музыка" link="/music"/>
                <NavItem linkImg={settings} linkText="Настройки" link="/settings"/>
            </div>
        </div>
    )
}

export default NavMenu;