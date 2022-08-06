import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser,faDiagramProject, faFile} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'



const Topbar = () => {
    return(
        <div className='nav-bar'>

            <nav>
                <NavLink class="nav-links"  exact="true" activeclassname="active" id="home-link" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink class="nav-links"  exact="true" activeclassname="active" id="about-link" to="about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink class="nav-links"  exact="true" activeclassname="active" id="contact-link" to="contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
                <NavLink class="nav-links" exact="true" activeclassname="active" id="project-link" to="Projects">
                    <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <div class="Social-List">
            <ul id="horizontal-list">
                <li>
                    <a
                        href="https://www.linkedin.com/in/wesley-cartagena-870603126/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/wcartagenaasc"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/wcartagenaasc"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            </div>
        </div>
    ) 
}
export default Topbar