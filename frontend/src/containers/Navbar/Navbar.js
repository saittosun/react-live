import React from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import Search from "../../components/Search";
import VideoEnvironment from '../VideoEnvironment/videoEnvironment';

import "./Navbar.scss";

const Navbar = () => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-custom nav-menu">
        <Link to="/" className="navbar-brand">
          <img alt="logo"
            src="aplaudoLogoSimpleBlack900.png"
            className="img-fluid logo-image"

          />
        </Link >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {pathname !== "/signin" ? <Search /> : null}
          {pathname === "/signin" ? <ul className="navbar-nav ml-auto">
            <li className="nav-item" data-toggle="collapse" data-target=".in">
              <NavLink to="/signin" className="nav-link menu-item">
                Sign in
              </NavLink>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".in">
              <NavLink to="/signup" className="nav-link menu-item">
                Register
              </NavLink>
            </li>
          </ul> : <ul className="navbar-nav ml-auto">
              <li className="nav-item" data-toggle="collapse" data-target=".in">
                <NavLink to="/videoenvironment" className="nav-link menu-item" >
                  Concert
                </NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".in">
                <NavLink to="/signup" className="nav-link menu-item">
                  Notifix
              </NavLink>
              </li>
              <li className="nav-item" data-toggle="m" data-target=".in">
                <NavLink to="/profile" className="nav-link menu-item">
                  {/* USERNAME */}
                </NavLink>
              </li>
            </ul>}
        </div>
      </nav >
    </div >
  );
};

export default Navbar;
