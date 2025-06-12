import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  // ============ Sticky Header ============
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ============ Sticky Header ============

  // ============ Login / Profile ============

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status from localStorage on load
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate('/login');
  };
  useEffect(() => {

    if (localStorage.getItem('isLoggedIn') === true) {
      setIsLoggedIn(true);
    }

  }, [])


  // ============ Login / Profile ============


  // ============ Industry Menu Api ============

  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const response = await fetch('https://test.pearl-developer.com/econ-market/api/industries');
        const data = await response.json();
        // The API has "industries" key
        setIndustries(data.industries);
      } catch (error) {
        console.error('Error fetching industries:', error);
      }
    };

    fetchIndustries();
  }, []);

  // ============ Industry Menu Api ============

  // ============ Website social info  Api ============

  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch('https://test.pearl-developer.com/econ-market/api/info');
        const data = await response.json();
        setInfo(data);
      } catch (error) {
        console.error('Error fetching info:', error);
      }
    };

    fetchInfo();
  }, []);

  // ============ Website social info  Api ============

  return (
    <>
      {/* Top Contact Bar */}
      <div className="top-header d-flex justify-content-between align-items-center px-3 py-2 text-white">
        <div className="contact-info d-flex gap-sm-4 align-sm-items-center">
          {info && (
            <>
              <Link to={`tel:+1${info.mobile_no1}`}>
                <img src="https://flagcdn.com/us.svg" alt="US Flag" width="20" />
                <i className="fa fa-phone ms-2 me-0"></i> +1 {info.mobile_no1}
              </Link>
              <Link to={`tel:+91${info.mobile_no2}`}>
                <img src="https://flagcdn.com/in.svg" alt="India Flag" width="20" />
                <i className="fa fa-phone ms-2 me-0"></i> +91 {info.mobile_no2}
              </Link>
              <Link to={`mailto:${info.email}`}>
                <i className="fa fa-envelope"></i> {info.email}
              </Link>
            </>
          )}
        </div>
        <div className="social-icons d-flex gap-2">
          {info && info.social_media && (
            <>
              {info.social_media.facebook && (
                <Link to={info.social_media.facebook} target="_blank"><FaFacebook className="social-icon" /></Link>
              )}
              {info.social_media.instagram && (
                <Link to={info.social_media.instagram} target="_blank"><FaInstagram className="social-icon" /></Link>
              )}
              {info.social_media.youtube && (
                <Link to={info.social_media.youtube} target="_blank"><FaTwitter className="social-icon" /></Link>
              )}
              {info.social_media.youtube && (
                <Link to={info.social_media.youtube} target="_blank"><FaYoutube className="social-icon" /></Link>
              )}
              {info.social_media.youtube && (
                <Link to={info.social_media.youtube} target="_blank"><FaLinkedinIn className="social-icon" /></Link>
              )}
            </>
          )}
        </div>
      </div>
      <nav className={`navbar navbar-expand-lg py-3 sticky-top shadow-sm ${isSticky ? "scrolled-header" : ""}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src="Images/web_logo_s.png" alt="" /></Link>
          {/* <Link className="navbar-brand" to="/"><img src={info.logo}  alt={info.site_name} /></Link> */}
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
                  Industries
                </NavLink>
                <ul className="dropdown-menu">

                  <li className="sub_dropdown">
                    <ul>
                      {industries.length > 0 ? industries.map(industry => (
                        <li key={industry.id}>
                          <Link className="dropdown-item industry_link" id={industry.id} to={`/industries/${industry.slug}`} >
                            {industry.name}
                          </Link>
                        </li>
                      )) : (
                        <p>Loading industries...</p>
                      )}
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/press_release">Press Release</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">Contact Us</NavLink>
              </li>
              {!isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item dropdown profile_menu">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link dropdown-toggle" : "nav-link dropdown-toggle active"
                    }
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li className="sub_dropdown w-100">
                      <ul>
                        <li className="w-100">
                          <NavLink to="/profile" style={{ textDecoration: "none" }}><img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" />Profile</NavLink>
                        </li>
                        <li className="w-100">
                          <button className="dropdown-item industry_link" onClick={handleLogout}>
                            Logout
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              )}
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
