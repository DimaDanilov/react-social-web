import style from './UserElement.module.css'
import { NavLink } from 'react-router-dom';


const UserElement = (props) => {

    return (
        // activeClassName={style.active}
        <NavLink className={style.link} to={"/messages/"+props.id} activeClassName={style.active}>
            <div className={style.user}>
                <p className={style.user_name}>{props.name}</p>
            </div>
        </NavLink>

    )
}

export default UserElement