import React from "react";
import { FaQuestion } from "react-icons/fa";


const AboutSection = () => {
  return (
    <>
      <section className="about-section py-5 border-bottom">
        <div className="container text-center">
          <div className="d-flex align-items-center gap-3">
            <img src="Images/coat-07.webp" alt="Tie Icon" className="mb-4" style={{ maxWidth: "100px" }} />
            <h2 className="fw-bold text-primary">About ECOM MARKET Insights</h2>
          </div>
          <p className="text-muted mb-5">
            The cycle of disruption and transformation is imminent for MARKETes looking to carve
            out a niche in highly competitive environments. While a few companies are focusing on
            transformational growth and addressing key challenges of disruptions, several others
            are simply unaware. At ECOM MARKET Insights we offer end-to-end solutions beyond
            flagship research technologies to help senior leaders across enterprises achieve their
            mission-critical goals. We deliver recommendations enabling growth to help build
            organizations of tomorrow.
          </p>

          <h5 className="text-uppercase text-start fw-bold text-primary mb-4">
            At ECOM MARKET Insights We Believe In:
          </h5>
          <div className="text-start">
            <p>
              <strong><u>Strong Industry Focus</u></strong><br />
              We track developments and provide market research data, customized services,
              analysis and recommendations for diverse industry verticals.
            </p>
            <p>
              <strong><u>Extensive Product Offerings</u></strong><br />
              We create syndicate and customized reports. Besides these, we offer consulting
              services to address a client’s research needs. We customize product offerings to
              meet domain-specific research needs.
            </p>
            <p>
              <strong><u>Robust Methodology</u></strong><br />
              Our market studies encompass a multitude of factors such as market, economic and
              technological developments. They contain a detailed study on various market segments.
              Information thus included is obtained via extensive desk research and interviews
              with relevant stakeholders.
            </p>
            <p>
              <strong><u>Comprehensive Reports</u></strong><br />
              We provide in-depth market analyses, which include refined forecasts, factors
              influencing the growth trajectory, bird’s eye view of competitive landscape, and
              key market insights to aid companies make strategic decisions.
            </p>
          </div>
        </div>
      </section>
      <section className="why-us-section text-dark">
        <div className="bg-primary text-white py-4 text-center d-flex align-items-center gap-3 justify-content-center">
          <h2 className="fw-bold mb-0">Why ECOM MARKET Insights</h2>
          <FaQuestion style={{ fontSize: "24px" }} />
        </div>

        <div className="container py-5">
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="team_result_card">
              <h5 className="text-info fw-bold">Result-oriented Team</h5>
              <p>
                Our team, consisting of seasoned analysts and researchers, adopts industry-leading
                research techniques to create all-encompassing reports. We nurture a result-oriented
                team, offering forward-thinking insights.
              </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="team_result_card">
                <h5 className="text-info fw-bold">Research Partner</h5>
                <p>
                  As research partners, our services extend beyond advising. We help clients develop
                  and execute transformational growth strategies.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="team_result_card">
                <h5 className="text-info fw-bold">Extensive Geographic Coverage</h5>
                <p>
                  Our global network provides in-depth regional and country-wise MARKET trend insights.
                  Our analysts ensure consistency across market surveys.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="team_result_card">
                <h5 className="text-info fw-bold">Tracking Global Trend</h5>
                <p>
                  We monitor the latest technology trends and market developments, helping companies adapt
                  to global changes.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="team_result_card">
                <h5 className="text-info fw-bold">Tailor-made Solutions</h5>
                <p>
                  Our custom research solutions help clients identify growth opportunities by eliminating
                  noise and focusing on their specific challenges.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="team_result_card">
                <h5 className="text-info fw-bold">Our Research is Disruptive</h5>
                <p>
                  We deliver exclusive insights in high-growth and niche markets—often unexplored by other
                  firms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
