import React, { useEffect, useState } from 'react';
import Carousel from '../Component/Home/Carousel';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    { title: 'Consulting Services', description: 'At Fortune Business Insights, our consulting services are fine-tuned to answer your commercial queries with relevant data derived from trusted industrial sources' },
    { title: 'Tailored Insights', description: 'At Fortune Business Insights, our consulting services are fine-tuned to answer your commercial queries with relevant data derived from trusted industrial sources' },
    { title: 'Syndicated Market Research', description: 'At Fortune Business Insights, our consulting services are fine-tuned to answer your commercial queries with relevant data derived from trusted industrial sources' },
    { title: 'Consulting Services', description: 'At Fortune Business Insights, our consulting services are fine-tuned to answer your commercial queries with relevant data derived from trusted industrial sources' },
    { title: 'Tailored Insights', description: 'At Fortune Business Insights, our consulting services are fine-tuned to answer your commercial queries with relevant data derived from trusted industrial sources' },
    { title: 'Syndicated Market Research', description: 'At Fortune Business Insights, our consulting services are fine-tuned to answer your commercial queries with relevant data derived from trusted industrial sources' }
  ];


  const industryData = {
    healthCare: [
      {
        heading: "Digital Communication System Market",
        publishedDate: "May 2025",
        paragraph: "Digital Communication System Market, By Application (Telecommunications, Data Communication)..."
      },
      {
        heading: "Mining Machinery Market",
        publishedDate: "May 2025",
        paragraph: "Mining Machinery Market, By Equipment Type (Surface Mining Equipment, Underground Equipment)..."
      },
      {
        heading: "Truck Transportation Market",
        publishedDate: "May 2025",
        paragraph: "Truck Transportation Market, By Size (Heavy Trucks, Medium Trucks, and Light Trucks)..."
      },
      {
        heading: "Tire Retail Market",
        publishedDate: "May 2025",
        paragraph: "Tire Retail Market, By Vehicle Type (Passenger Vehicles, Commercial Vehicles, Two-Wheelers)..."
      },
      {
        heading: "Military Drone Market",
        publishedDate: "May 2025",
        paragraph: "Military Drone Market, By Platform (Strategic Drones, Tactical Drones, and Small UAVs)..."
      },
      {
        heading: "Head End System Market",
        publishedDate: "May 2025",
        paragraph: "Head End System Market, By Type (Hardware, Software, and Services), By Application..."
      }
    ],
    chemicalsAndMaterials: [
      {
        heading: "Ammonium Perchlorate Market",
        publishedDate: "May 2025",
        paragraph: "Ammonium Perchlorate Market, By Grade (Industrial Grade, Reagent Grade, and Other)..."
      },
      {
        heading: "Phosphate Rock Market",
        publishedDate: "May 2025",
        paragraph: "Phosphate Rock Market, By Type (Sedimentary Phosphate Rock and Igneous Phosphate)..."
      },
      {
        heading: "Agricultural Nanotechnology Market",
        publishedDate: "May 2025",
        paragraph: "Agricultural Nanotechnology Market, By Type (Nano-Pesticides, Nano-Herbicides, Nano-Fertilizers)..."
      },
      {
        heading: "Commercial Floorings Market",
        publishedDate: "May 2025",
        paragraph: "Commercial Floorings Market, By Product (Ceramics, Vitrified (Porcelain), Carpet, Wood)..."
      },
      {
        heading: "Chemical Fungicides Market",
        publishedDate: "May 2025",
        paragraph: "Chemical Fungicides Market, By Product Type (Triazoles, Strobilurins, Chloronitriles)..."
      },
      {
        heading: "Solvent Cement Market",
        publishedDate: "May 2025",
        paragraph: "Solvent Cement Market, By Product Type (PVC Solvent Cement, CPVC Solvent Cement, ABS Solvent Cement)..."
      }
    ],
    publishDate: [
      {
        heading: "Ammonium Perchlorate Market",
        publishedDate: "May 2025",
        paragraph: "Ammonium Perchlorate Market, By Grade (Industrial Grade, Reagent Grade, and Other)..."
      },
      {
        heading: "Phosphate Rock Market",
        publishedDate: "May 2025",
        paragraph: "Phosphate Rock Market, By Type (Sedimentary Phosphate Rock and Igneous Phosphate)..."
      },
      {
        heading: "Agricultural Nanotechnology Market",
        publishedDate: "May 2025",
        paragraph: "Agricultural Nanotechnology Market, By Type (Nano-Pesticides, Nano-Herbicides, Nano-Fertilizers)..."
      },
      {
        heading: "Commercial Floorings Market",
        publishedDate: "May 2025",
        paragraph: "Commercial Floorings Market, By Product (Ceramics, Vitrified (Porcelain), Carpet, Wood)..."
      },
      {
        heading: "Chemical Fungicides Market",
        publishedDate: "May 2025",
        paragraph: "Chemical Fungicides Market, By Product Type (Triazoles, Strobilurins, Chloronitriles)..."
      },
      {
        heading: "Solvent Cement Market",
        publishedDate: "May 2025",
        paragraph: "Solvent Cement Market, By Product Type (PVC Solvent Cement, CPVC Solvent Cement, ABS Solvent Cement)..."
      }
    ]
  };





  return (
    <>
      <Carousel />
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
      <section className='our_client py-3 py-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="our_client_content">
                <h5>CUSTOM RESEARCH</h5>
                <h3>Get insights before anyone else can.</h3>
                <p>A dedicated team of highly talented analysts will break down your specific business objectives and draw up tailor-made solutions.</p>
                <p>With distributed expertise and continuous support, we become a part of your growth. Our global network of experts provides real-time inputs from the field, giving you sound insights into industry changes as and when they happen.</p>
                <button>Explore More</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="our_client_img">
                <img src="https://s3.mordorintelligence.com/home/custom_research.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- service offer --------------- */}
      <section className="service_offer">
        <div className="container">
          <h3 className='section_heading'>SERVICES WE OFFER</h3>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-12 col-sm-6 col-lg-4" key={index}>
                <div className="service_card p-3">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                  <Link to={"/"}>Read More...</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ----------------- service offer --------------- */}
      {/* ----------------- Industry Career --------------- */}
      <section className="industry_career">
        <div className="container">
          <h3 className="section_heading text-white">Industry We Career</h3>
          <div className="row">
            <div className="col-md-3">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="pills-healthcare-tab" data-bs-toggle="pill" data-bs-target="#pills-healthcare" type="button" role="tab" aria-controls="pills-healthcare" aria-selected="true">Health Care</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="chemical_material-tab" data-bs-toggle="pill" data-bs-target="#chemical_material" type="button" role="tab" aria-controls="chemical_material" aria-selected="false">Chemical Material</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="automation-tab" data-bs-toggle="pill" data-bs-target="#automation" type="button" role="tab" aria-controls="automation" aria-selected="false"> Automation</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="other-tab" data-bs-toggle="pill" data-bs-target="#other" type="button" role="tab" aria-controls="other" aria-selected="false">Other</button>
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-healthcare" role="tabpanel" aria-labelledby="pills-healthcare-tab" tabindex="0">
                  <div className="industry_data_cards">
                    <div className="row">
                      {industryData.healthCare.map((item, index) => (
                        <div className="col-md-6 mb-3" key={index}>
                          <div className="indusrty_card_item">
                            <h5 className="fw-bold">{item.heading}</h5>
                            <span className="mb-1"><strong>Published Date:</strong> {item.publishedDate}</span>
                            <p>{item.paragraph}</p>
                            <Link to={"/"}><span className="text-primary">View more</span></Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="chemical_material" role="tabpanel" aria-labelledby="chemical_material-tab" tabindex="0">
                  <div className="industry_data_cards">
                    <div className="row">
                      {industryData.chemicalsAndMaterials.map((item, index) => (
                        <div className="col-md-6 mb-3" key={index}>
                          <div className="indusrty_card_item">
                            <h5 className="fw-bold">{item.heading}</h5>
                            <span className="mb-1"><strong>Published Date:</strong> {item.publishedDate}</span>
                            <p>{item.paragraph}</p>
                            <Link to={"/"}><span className="text-primary">View more</span></Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="automation" role="tabpanel" aria-labelledby="automation-tab" tabindex="0">
                  <div className="industry_data_cards">
                    <div className="row">
                      {industryData.healthCare.map((item, index) => (
                        <div className="col-md-6 mb-3" key={index}>
                          <div className="indusrty_card_item">
                            <h5 className="fw-bold">{item.heading}</h5>
                            <span className="mb-1"><strong>Published Date:</strong> {item.publishedDate}</span>
                            <p>{item.paragraph}</p>
                            <Link to={"/"}><span className="text-primary">View more</span></Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="other" role="tabpanel" aria-labelledby="other-tab" tabindex="0">
                  <div className="industry_data_cards">
                    <div className="row">
                      {industryData.publishDate.map((item, index) => (
                        <div className="col-md-6 mb-3" key={index}>
                          <div className="indusrty_card_item">
                            <h5 className="fw-bold">{item.heading}</h5>
                            <span className="mb-1"><strong>Published Date:</strong> {item.publishedDate}</span>
                            <p>{item.paragraph}</p>
                            <Link to={"/"}><span className="text-primary">View more</span></Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------- Industry Career --------------- */}
    </>
  );
};

export default Home;
