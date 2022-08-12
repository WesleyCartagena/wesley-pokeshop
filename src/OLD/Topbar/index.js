import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faMagnifyingGlass,faCartShopping} from '@fortawesome/free-solid-svg-icons'





const Topbar = () => {
    return(
        <div className='nav-bar'>

            <nav>
                <a href="#" class="nav-links"  exact="true" activeclassname="active" id="home-link" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </a>
                <a href="#" class="nav-links"  exact="true" activeclassname="active" id="search-link" >
                    <FontAwesomeIcon icon={faMagnifyingGlass} color="#4d4d4e"/>
                </a>
                <a  href="#" class="nav-links"  exact="true" activeclassname="active" id="cart-link" >
                    <FontAwesomeIcon icon={faCartShopping} color="#4d4d4e"/>
                </a>

            </nav>

        </div>
    ) 
}
export default Topbar