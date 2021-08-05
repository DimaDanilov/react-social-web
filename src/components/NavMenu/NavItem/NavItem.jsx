import { NavLink } from 'react-router-dom';
import style from './NavItem.module.css'

function NavItem(props) {
    return (
        <NavLink className={style.link} to={props.link} activeClassName={style.active}>
            <div className={style.nav_el}>
                <img className={style.icon} alt='' src={props.linkImg} />
                <span className={style.nav_el__text}>{props.linkText}</span>
            </div>
        </NavLink>
    )
}

export default NavItem;