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

  const industryLinks1 = [
  { id: 1, menuTitle: "Agriculture", menuLink: "/industry-detail/agriculture" },
  { id: 2, menuTitle: "Automobile and Transportation", menuLink: "/industry-detail/automobile-and-transportation" },
  { id: 3, menuTitle: "Aerospace and Defense", menuLink: "/industry-detail/aerospace-and-defense" },
  { id: 4, menuTitle: "Biotechnology", menuLink: "/industry-detail/biotechnology" },
  { id: 5, menuTitle: "Chemical and Material", menuLink: "/industry-detail/chemical-and-material" },
  { id: 6, menuTitle: "Consumer Goods and Services", menuLink: "/industry-detail/consumer-goods-and-services" },
  { id: 7, menuTitle: "Construction and Real Estate", menuLink: "/industry-detail/construction-and-real-estate" },
  { id: 8, menuTitle: "Electronics and Semiconductor", menuLink: "/industry-detail/electronics-and-semiconductor" },
  { id: 9, menuTitle: "Energy and Power", menuLink: "/industry-detail/energy-and-power" },
  { id: 10, menuTitle: "Education and Training", menuLink: "/industry-detail/education-and-training" },
  { id: 11, menuTitle: "Food and Beverages", menuLink: "/industry-detail/food-and-beverages" }
]
const industryLinks2 = [
 { id: 12, menuTitle: "Financial Services", menuLink: "/industry-detail/financial-services" },
  { id: 13, menuTitle: "Information Technology and Telecom", menuLink: "/industry-detail/information-technology-and-telecom" },
  { id: 14, menuTitle: "Industrial and Manufacturing", menuLink: "/industry-detail/industrial-and-manufacturing" },
  { id: 15, menuTitle: "Insurance", menuLink: "/industry-detail/insurance" },
  { id: 16, menuTitle: "Machinery and Equipment", menuLink: "/industry-detail/machinery-and-equipment" },
  { id: 17, menuTitle: "Medical Devices", menuLink: "/industry-detail/medical-devices" },
  { id: 18, menuTitle: "Media and Entertainment", menuLink: "/industry-detail/media-and-entertainment" },
  { id: 19, menuTitle: "Pharma and Healthcare", menuLink: "/industry-detail/pharma-and-healthcare" },
  { id: 20, menuTitle: "Packaging", menuLink: "/industry-detail/packaging" },
  { id: 21, menuTitle: "Travel, Tourism & Hospitality", menuLink: "/industry-detail/travel-tourism-and-hospitality" },
  { id: 22, menuTitle: "Sports and Athletics", menuLink: "/industry-detail/sports-and-athletics" }
]


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
          <Link className="navbar-brand" to="/"><img src="Images/web_logo_s.png" alt="" /></Link>
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
              {/* <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/industries">Industries</NavLink>
              </li> */}
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
                      {industryLinks1.map((menu, idx) => (
                        <li key={idx}>
                          <Link className="dropdown-item industry_link" id={menu.id} to="/industry-detail">
                            {menu.menuTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="sub_dropdown">
                    <ul>
                      {industryLinks2.map((menu, idx) => (
                        <li key={idx}>
                          <Link className="dropdown-item industry_link" id={menu.id} to="/industry-detail">
                            {menu.menuTitle}
                          </Link>
                        </li>
                      ))}
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
