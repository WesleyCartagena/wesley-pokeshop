import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faMagnifyingGlass,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'



const Topbar = () => {
    return(
        <div className='nav-bar'>

            <nav>
                <NavLink class="nav-links"  exact="true" activeclassname="active" id="home-link" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink class="nav-links"  exact="true" activeclassname="active" id="search-link" to="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} color="#4d4d4e"/>
                </NavLink>
                <NavLink class="nav-links"  exact="true" activeclassname="active" id="cart-link" to="">
                    <FontAwesomeIcon icon={faCartShopping} color="#4d4d4e"/>
                </NavLink>
            </nav>

        </div>
    ) 
}
export default Topbar