import React from "react";
import { FaQuestion } from "react-icons/fa";


const AboutSection = () => {
  return (
    <>
    <section>
      <img src="Images/About_banner.png" alt="" className="w-100" />
    </section>
      <section className="about-section py-5 border-bottom">
        <div className="container text-center">
          <div className="d-flex align-items-center gap-3">
            {/* <img src="Images/coat-07.webp" alt="Tie Icon" className="mb-4" style={{ maxWidth: "100px" }} /> */}
            <h2 className="fw-bold text-primary">About MetricWave Insights</h2>
          </div>
          <p className="text-muted">
            MetricWave Insights is a world leader in competitive intelligence, market research, and strategic data
            analytics. At our core, we are insight-driven growth enablers, allowing organizations to navigate market
            complexity and make accurate, timely, and intelligent business decisions. Our international clients
            comprise Fortune 1000 firms, high-growth startups, consulting organizations, institutional investors,
            public sector organizations, and innovation hubs.
          </p>
          <p className="text-muted">
            With a multidisciplinary team of industry experts, economists, data scientists, and research consultants,
            MetricWave Insights provides both custom and syndicated research solutions designed to meet the
            unique needs of each client. Our method is characterized by our unwavering pursuit of relevance, our
            exacting approach, and our dedication to providing business intelligence that delivers actual-world
            results.
          </p>
          <p className="text-muted">
            Whether your goal is to launch a new product, penetrate a new market, evaluate investment risk,
            understand customer behavior, or track competitor strategy, we offer the insight foundation you need
            to take action with confidence and clarity.
          </p>
          <p className="text-muted">
            At MetricWave Insights, we feel that insight without relevance has no use. That is why our philosophy
            revolves around providing decision-grade intelligence that is pragmatic, industry-focused, and bespoke
            to your specific business goals. We move beyond descriptive reports to provide predictive and
            prescriptive insights that influence strategies, guide policies, and influence investments.
          </p>
        </div>
      </section>
      
    </>
  );
};

export default AboutSection;
