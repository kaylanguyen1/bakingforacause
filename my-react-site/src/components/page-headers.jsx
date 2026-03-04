import { Link, NavLink } from 'react-router-dom'
import '../App.css'
import logo from '../assets/logo.png'

function PageHeaders() {

    return (
            <div className="page-header">
                <Link to="/" className="page-title instrument-serif-regular">
                    <img src={logo} className="logo-container"/>
                    baking for a cause
                </Link>
                <div className="page-tab-container">
                    <NavLink to="/about" className={({ isActive }) =>
                        isActive ? "page-tab inter-medium active" : "page-tab inter-medium"
                    }>
                        about
                    </NavLink> 

                    <NavLink to="/join" className={({ isActive }) =>
                        isActive ? "page-tab inter-medium active" : "page-tab inter-medium"
                    }>
                        join
                    </NavLink>  

                    <NavLink to="/gallery" className={({ isActive }) =>
                        isActive ? "page-tab inter-medium active" : "page-tab inter-medium"
                    }>
                        gallery
                    </NavLink>        
                </div>
            </div>
    )
}

export default PageHeaders