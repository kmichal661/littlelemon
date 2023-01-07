import Logo from '../assets/Logo.svg'
import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <header>

           <NavLink to="/"> <img src={Logo} alt="logo" /> </NavLink>   
        </header>
    )
}

export default Header