import React, { useEffect, useState } from 'react';
import Carousel from '../Component/Home/Carousel';

const Home = () => {
  

  return (
    <>
    <Carousel/>
    <section className='our_client py-3 py-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="our_client_content">
              <h5>OUR CLIENT</h5>
              <h3>Providing insights to 6000+ enterprises across 100+ countries.</h3>
              <p>We are a fully revenue-funded organization, since our founding in 2014. To date, we have partnered with 6000+ enterprises across 20+ industries, to deliver precise data and actionable insights in over 10000 projects.</p>
              <p>Our domain-specific teams of research experts continuously track markets, providing our clients the competitive edge through high-quality market intelligence.</p>
              <button>View Client</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="our_client_img">
              <img src="https://s3.mordorintelligence.com/home/logos.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='our_client py-3 py-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="our_client_img">
              <img src="https://s3.mordorintelligence.com/home/industry_reports_logo.webp" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="our_client_content">
              <h5>INDUSTRY REPORTS</h5>
              <h3>Gain a deeper understanding of global markets.</h3>
              <p>Get access to defining indicators and understand how trends shape the future of markets. Our set of 17,000+ reports cover more than 20 industry verticals.</p>
              <p>In each report we break down and analyze the market by segments, understand the prevailing dynamics and study the companies operating in these spaces, to finally arrive at solutions that help you have the competitive advantage.</p>
              <button>View Reports</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
