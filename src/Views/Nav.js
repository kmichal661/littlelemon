import {NavLink} from 'react-router-dom'

function Nav(){
    return(
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
                <li><NavLink to="/">Menu</NavLink></li>
                <li><NavLink to="/booking">Reservations</NavLink></li>
                <li><NavLink to="/">Order Online</NavLink></li>
                <li><NavLink to="/">Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav