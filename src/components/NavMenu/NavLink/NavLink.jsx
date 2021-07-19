import style from './NavLink.module.css'

function NavLink(props) {
    return (
        <a class={style.link} href={props.link}>
            <div className={style.nav_el}>
                <img className={style.icon} alt='' src={props.link_img} />
                <span className={style.nav_el__text}>{props.link_text}</span>
            </div>
        </a>
    )
}

export default NavLink;