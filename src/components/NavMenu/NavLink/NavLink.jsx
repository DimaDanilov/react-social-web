import style from './NavLink.module.css'

function NavLink(props) {
    return (
        <div className={style.nav_el}>
            <img className={style.icon} alt='' src={props.link_img} />
            <span className={style.nav_el__text}>{props.link_text}</span>
        </div>
    )
}

export default NavLink;