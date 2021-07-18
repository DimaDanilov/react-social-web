import logo from '../logo/logo.svg'
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo_wrapper}>
                <img src={logo} alt='' className={style.app_logo} />
            </div>
        </div>
    )
}

export default Header;