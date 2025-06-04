import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="top-header d-flex justify-content-between align-items-center px-3 py-2 text-white">
        <div className="contact-info d-flex gap-sm-4 align-sm-items-center">
          <Link to={"tel:+18125064440"}>
            <img src="https://flagcdn.com/us.svg" alt="US Flag" width="20" />
            <i className="fa fa-phone ms-2 me-0"></i> +1 812 506 4440
          </Link>
          <Link to={"tel:+917875074426"}>
            <img src="https://flagcdn.com/in.svg" alt="India Flag" width="20" />
            <i className="fa fa-phone ms-2 me-0"></i> +91 7875074426
          </Link>
          <Link to={"mail:sales@econmarketresearch.com"}>
            <i className="fa fa-envelope"></i> sales@econmarketresearch.com
          </Link>
        </div>
        <div className="social-icons d-flex gap-2">
          <Link to={"/"}><FaFacebook className="social-icon" /></Link>
          <Link to={"/"}><FaInstagram className="social-icon" /></Link>
          <Link to={"/"}><FaTwitter className="social-icon" /></Link>
          <Link to={"/"}><FaLinkedinIn className="social-icon" /></Link>
        </div>
      </div>
      <nav className={`navbar navbar-expand-lg py-3 sticky-top shadow-sm ${isSticky ? "scrolled-header" : ""}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">ECON MARKET</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-2">
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/service">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/custom_search">Custom Search</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/subscription">Subscription</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link dropdown-toggle " : "nav-link dropdown-toggle active" 
                  }
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Insights
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/press_release">Press Release</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/blog">Blog</NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/career">Careers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/login">Login</NavLink>
              </li>
            </ul>
            <form className="search_header" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
