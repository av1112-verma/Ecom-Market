import React from 'react';
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedinIn , FaYoutube  } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
  { label: 'Home', url: '/' },
  { label: 'Reports', url: '/reports' },
  { label: 'About Us', url: '/about' },
  { label: 'Career', url: '/career' },
  { label: 'Contact Us', url: '/contact' },
];
 const footerLinks2 = [
  { label: 'Custom Research', url: '/custom-research' },
  { label: 'Subscription', url: '/subscription' },
  { label: 'Terms & Conditions', url: '/terms' },
  { label: 'Privacy Policy', url: '/privacy' },
  { label: 'Cookie Policy', url: '/cookies' }
];

  return (
    <footer className="py-3 py-md-5">
      <div className="container">
        <div className="row">
          <div className='col-6 col-md-3'>
            <div className="footer_item">
              <h3 className="footer_heading">LINKS</h3>
              <ul className="list-unstyled">
                {footerLinks.map((link, index) => (
                  <li key={index} className='nav-item'>
                    <a href={link.url} className="nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='col-6 col-md-3'>
            <div className="footer_item">
              <h3 className="footer_heading">LINKS</h3>
              <ul className="list-unstyled">
                {footerLinks2.map((link, index) => (
                  <li key={index} className='nav-item'>
                    <a href={link.url} className="nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='col-6 col-md-3'>
            <div className="footer_item">
              <h3 className="footer_heading">CONTACT</h3>
              <p>Nanakramguda Rd, Financial District, Gachibowli<br />
                Hyderabad, Telangana - 500032<br />
                India</p>
              <p className="mt-4"><i class="fa-solid fa-phone"></i> +1 617-765-2493</p>
              <p className="mt-2"><i class="fa-regular fa-envelope me-2"></i><a href="mailto:info@mordorintelligence.com" className="underline">info@mordorintelligence.com</a></p>
              <p className="mt-2">Media Inquiries:<br />
                <i class="fa-regular fa-envelope me-2"></i><a href="mailto:media@mordorintelligence.com" className="underline">media@mordorintelligence.com</a></p>
            </div>
          </div>

          <div className='col-md-3'>
            <div className="footer_item">
              <h3 className="footer_heading">JOIN US</h3>
              <p>We are always looking to hire talented individuals with equal and extraordinary proportions of industry expertise, problem solving ability and inclination.</p>
              <p className="mt-2">Interested? Please email us:<br />
                <i class="fa-regular fa-envelope me-2"></i><a href="mailto:careers@mordorintelligence.com" className="underline">careers@mordorintelligence.com</a></p>

              <h3 className="footer_heading">CONNECT WITH US RIGHT NOW</h3>
              <div className="social-icons d-flex gap-2">
                <Link to={"https://www.facebook.com/metricwaveinsights"}><FaFacebook className="social-icon" /></Link>
                <Link to={"https://www.instagram.com/metricwaveinsights/"}><FaInstagram className="social-icon" /></Link>
                <Link to={"https://x.com/metric_wave"}><FaTwitter className="social-icon" /></Link>
                <Link to={"https://www.youtube.com/@metricwaveinsights"}><FaYoutube  className="social-icon" /></Link>
                <Link to={"https://www.linkedin.com/company/metricwave-insights/"}><FaLinkedinIn className="social-icon" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
