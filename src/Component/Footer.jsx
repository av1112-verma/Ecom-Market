import React ,{useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
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
              {info ? (
                <>
                  <p>{info.address}</p>
                  <p className="mt-4">
                    <i className="fa-solid fa-phone"></i> +1 {info.mobile_no1}
                  </p>
                  <p className="mt-2">
                    <i className="fa-regular fa-envelope me-2"></i>
                    <a href={`mailto:${info.email}`} className="underline">
                      {info.email}
                    </a>
                  </p>
                  <p className="mt-2">
                    Media Inquiries:<br />
                    <i className="fa-regular fa-envelope me-2"></i>
                    <a href={`mailto:${info.email}`} className="underline">
                      {info.email}
                    </a>
                  </p>
                </>
              ) : (
                <p>Loading contact info...</p>
              )}
            </div>
          </div>

          <div className='col-md-3'>
            <div className="footer_item">
              <h3 className="footer_heading">JOIN US</h3>
              <p>We are always looking to hire talented individuals with equal and extraordinary proportions of industry expertise, problem solving ability and inclination.</p>
              {info ? (
                <>
                  <p className="mt-2">
                    Interested? Please email us:<br />
                    <i className="fa-regular fa-envelope me-2"></i>
                    <a href={`mailto:${info.email}`} className="underline">
                      {info.email}
                    </a>
                  </p>

                  <h3 className="footer_heading">CONNECT WITH US RIGHT NOW</h3>
                  <div className="social-icons d-flex gap-2">
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
                  </div>
                </>
              ) : (
                <p>Loading social links...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
