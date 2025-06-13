import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const PressRelease = () => {
  const [pressInfo, setPressInfo] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch('https://test.pearl-developer.com/econ-market/api/press-release');
        const data = await response.json();
        console.log("API Response:", data);
        setPressInfo(data.pressReleases); 
      } catch (error) {
        console.error('Error fetching info:', error);
        setPressInfo([]); 
      }
    };

    fetchInfo();
  }, []);
console.log("Press Info:", pressInfo);
  return (
    <section>
      <div className="page-title">Press Releases</div>
      <div className='container'>
        {pressInfo && pressInfo.length > 0 ? (
          pressInfo?.map((press) => (
            <div className="press-page" key={press.id}>
              <div className="press-card">
                <div className="press-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="press-content">
                  <h4 className="press-title">{press.name}</h4>
                  <p className="press-date"><strong>Published Date :</strong> Apr 2025</p>
                  <p>{parse(press.description)}
                    <Link to={`/press_details/${press.slug}`} className="_ad_anchor">...View More</Link>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
        <div className="d-flex justify-content-center align-items-center" style={{height: '300px'}}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}

export default PressRelease;
