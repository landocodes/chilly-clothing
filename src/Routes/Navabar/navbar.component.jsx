import { Fragment } from 'react';
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/CHILLY.svg";

import './navigation.styles.scss'

const Navbar = () => {
    return (
        <Fragment>
        <div className="nav">
        <Link className="logo-container" to="/">
         <span>Orlando <br></br> Blagrove</span>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            About
          </Link>
          <Link className="nav-link" to="/shop">
            Projects
          </Link>
          <Link className="nav-link" to="/shop">
            Skills
          </Link>
          <Link className="nav-link" to="/shop">
            Contact
          </Link>
          
          
      </div>
      
      </div>
      <Outlet/>
     </Fragment>
    )
}
export default Navbar;