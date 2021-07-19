import user from '../../img/logo/user.svg'
import messages from '../../img/logo/email.svg'
import news from '../../img/logo/newspaper.svg'
import music from '../../img/logo/music.svg'
import settings from '../../img/logo/settings.svg'
import style from './NavMenu.module.css'
import NavLink from './NavLink/NavLink'

function NavMenu() {
    return (
        <div className={style.nav}>
            <div className={style.nav_menu}>
                <NavLink link_img={user} link_text="Профиль" link="/profile" />
                <NavLink link_img={messages} link_text="Сообщения" link="/messages" />
                <NavLink link_img={news} link_text="Новости" link="/news"/>
                <NavLink link_img={music} link_text="Музыка" link="/music"/>
                <NavLink link_img={settings} link_text="Настройки" link="/settings"/>
            </div>
        </div>
    )
}

export default NavMenu;