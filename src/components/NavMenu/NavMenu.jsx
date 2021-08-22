import user from '../../img/icons/user.svg'
import messages from '../../img/icons/email.svg'
import users from '../../img/icons/users.svg'
import news from '../../img/icons/newspaper.svg'
import music from '../../img/icons/music.svg'
import settings from '../../img/icons/settings.svg'
import style from './NavMenu.module.css'
import NavItem from './NavItem/NavItem'

function NavMenu() {
    return (
        <div className={style.nav}>
            <div className={style.nav_menu}>
                <NavItem linkImg={user} linkText="Профиль" link="/profile" />
                <NavItem linkImg={messages} linkText="Сообщения" link="/messages" />
                <NavItem linkImg={users} linkText="Пользователи" link="/users" />
                <NavItem linkImg={news} linkText="Новости" link="/news"/>
                <NavItem linkImg={music} linkText="Музыка" link="/music"/>
                <NavItem linkImg={settings} linkText="Настройки" link="/settings"/>
            </div>
        </div>
    )
}

export default NavMenu;