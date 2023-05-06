import {Link} from "react-router-dom"
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={style.navbar}>
            <Link className={style.link} to='/'>Main Page</Link>
            <Link className={style.link} to='/posts'>Posts</Link>
        </nav>
    )
}

export default NavBar 