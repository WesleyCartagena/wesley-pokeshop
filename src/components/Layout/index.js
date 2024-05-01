import { Outlet } from 'react-router-dom'
import Topbar from '../Topbar'
import './index.scss'

const Layout = () => {
    return ( 
        <div className="App"> 
            <Topbar />
            <Outlet />
        </div>
    )
}


export default Layout