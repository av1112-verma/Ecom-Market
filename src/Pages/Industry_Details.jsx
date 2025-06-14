import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Industry_Details = () => {


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



  return (
    <section className="card-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="industies_category">
              <ul className="industies_category_list">
                <li><h3>All Categories</h3></li>
                {industries.length > 0 ? industries.map(industry => (
                  <li key={industry.id}>
                    <Link className="industry_link" id={industry.id} to={`/industries/${industry.slug}`} >
                      {industry.name}
                    </Link>
                  </li>
                )) : (
                  <p>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </p>
                )}
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-lg-4 col-md-6 co-12">
                <div className="card-box">
                  <div className="card-img">
                    <img src="https://s3.mordorintelligence.com/home/logos.png" alt="Report 1" />
                  </div>
                  <div className="card-content">
                    <h2>Compost Market Size, Share, Trends, Growth, and Industry Analysis...</h2>
                    <p>
                      Global Compost Market size was USD 7.37 billion in 2024 and is projected to touch USD 9.58 billion by 2033, at a CAGR of 3.33%.
                    </p>
                    <p className="details">
                      <div className="d-flex flex-column">
                        <strong>No. of Pages:</strong> <span>260</span></div> |
                      <div className="d-flex flex-column">
                        <strong> Report Code:</strong> <span>EMR001197</span></div> |
                      <div className="d-flex flex-column">
                        <strong> Price:</strong> <span>$4850</span>
                      </div>
                    </p>
                    <div className="card-buttons">
                      <Link to="/request-details" className="btn blue">
                        Request Free Sample
                      </Link>
                      <button className="btn green">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industry_Details