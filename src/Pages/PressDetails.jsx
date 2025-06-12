import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const PressDetails = () => {
  const { slug } = useParams(); // Getting slug from URL
  const [pressData, setPressData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPressDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://test.pearl-developer.com/econ-market/api/press-release-detail/${slug}`);
        const data = await response.json();

        // Check if 'pressRelease' exists in response
        setPressData(data.pressRelease || null);
      } catch (error) {
        console.error('Error fetching press release details:', error);
        setPressData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPressDetails();
  }, [slug]);

  if (loading) return <p>Loading press release details...</p>;
  if (!pressData) return <p>Press release not found.</p>;

  const { name, description, created_at, image } = pressData;

  return (
    <section className="press_details">
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex">
              <Link to="/press_release" className="text-primary text-decoration-none">
                🏠 Press Release /
              </Link>
              <p>{name}</p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="title-bar">{name}</div>
          </div>

          <div className="col-md-12">
            <div className="d-flex justify-content-between align-items-center flex-wrap my-3">
              <p className="text-muted m-0">
                Published On: <strong>{new Date(created_at).toLocaleDateString()}</strong>
              </p>
              <div className="d-flex gap-2">
                <button className="btn btn-green">Get Instant Access - Buy Now</button>
                <button className="btn btn-blue">Request Sample</button>
              </div>
            </div>
          </div>

          <div className="col-md-12 _details_row">
            <div className="row">
              <div className="col-md-8">
                <img src={image} alt={name} className="img-fluid mb-3" />
                <p>{parse(description)}</p>
              </div>

              <div className="col-md-4">
                <div className="sticky_ad">
                  <div className="highlight-box">
                    <h6><strong>📄 Need a Custom Report?</strong></h6>
                    <p>We can customize every report - free of charge...</p>
                    <button className="btn btn-info w-100">Customize Now</button>
                  </div>

                  <div className="highlight-box">
                    <h6><strong>💰 Limited Budget?</strong></h6>
                    <p>We help clients to procure the report at their budgeted price.</p>
                    <button className="btn btn-outline-primary w-100">Request Discount</button>
                  </div>

                  <div className="our_client_img">
                    <img
                      className="w-100"
                      alt="Client Logos"
                      src="https://s3.mordorintelligence.com/home/logos.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PressDetails;
