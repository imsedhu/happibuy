import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png"
import { AuthContext } from '../contexts/AuthProvider';
import { NavDropdown } from "react-bootstrap";

const NavbarSection = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // check if user is register
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //addevent listener
window.addEventListener("scroll",()=>{
  if(window.scrollY > 200){
    setHeaderFixed(true);
  }else{
    setHeaderFixed(false)
  }
})
  
  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
    {/* header top start */}
    <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
      <div className="container">
        <div className="header-top-area">
          <Link to="/signup" className='lab-btn me-3'><span>Craete Account</span></Link>
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>

    {/* header bottom */}
    <div className="header-bottom">
      <div className="container">
        <div className="header-wrapper">
          {/* logo */}
          <div className="logo-search-acte">
            <Link to={"/"}>
            <img src={logo} alt="" />
            </Link>
          </div>

          {/* menu area */}
          <div className="menu-area">
            <div className="menu">
              <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
              </ul>
            </div>

            {/* users when user available */}
            {user ? (
                <>
                  <div>
                    {user?.photoURL ? (
                      <>
                        <img src={user?.photoURL} className="nav-profile" />
                      </>
                    ) : (
                      <img
                        src="/src/assets/images/author/01.jpg"
                        className="nav-profile"
                      />
                    )}
                  </div>
                  <NavDropdown id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/cart-page">
                      Shopping Cart
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/cart-page">Order</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Link
                    to="/sign-up"
                    className="lab-btn me-3 d-none d-md-block"
                  >
                    <span>Create Account</span>
                  </Link>
                  <Link to="/login" className="d-none d-md-block">
                    Log In
                  </Link>
                </>
              )}

            {/* menu toggler */}
            <div onClick={()=>setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* social toggle */}
            <div className="ellepsis-bar d-md-none" onClick={()=> setSocialToggle(!socialToggle)}>
              <i className='icofont-info-square'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
   </header>
  )
}

export default NavbarSection