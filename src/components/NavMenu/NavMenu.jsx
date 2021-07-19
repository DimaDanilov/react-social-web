import user from '../../logo/user.svg'
import messages from '../../logo/email.svg'
import news from '../../logo/newspaper.svg'
import music from '../../logo/music.svg'
import settings from '../../logo/settings.svg'
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