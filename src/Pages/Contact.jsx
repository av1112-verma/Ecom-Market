import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy_policy: false,
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacy_policy) {
      setError("Please accept the Terms & Conditions.");
      setSuccess("");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("https://test.pearl-developer.com/econ-market/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          privacy_policy: formData.privacy_policy,
        }),
      });

      const result = await response.json();

              console.log("the response", result)

      if (response.ok && result.success) {
        setSuccess(result.message); 
        setError("");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          privacy_policy: false,
        });
      } else {
        setError(result.message || "Failed to send message.");
        setSuccess("");
      }
    } catch (err) {
      console.error("Error sending mail:", err);
      setError("Something went wrong!");
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  // Social info fetch
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

  return (
    <>
      <div className="contact-section">
        <div className="overlay">
          <h1>CONTACT US</h1>
          <p>HOME / CONTACT US</p>
        </div>
      </div>
      <section className="_main_contact my-5">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6">
              <div className="contact-info mb-3">
                <h6 className="text-uppercase">Contact Us</h6>
                <h2 className="my-3">Contact With Us</h2>
                <p>
                  Rapidiously myocardinate cross-platform intellectual capital after the
                  model. Appropriately create interactive infrastructures after
                  maintance Holistically facilitate stand-alone
                </p>
                {info && (
                  <>
                    <div className="info-box d-flex align-items-center mb-4">
                      <div className="d-flex align-items-center gap-2">
                        <i className="fas fa-phone ad_icon_contact"></i>
                        <div>
                          <div className="label">Call Us Now</div>
                          <div className="value">+1 {info.mobile_no1}</div>
                        </div>
                      </div>
                    </div>

                    <div className="info-box d-flex align-items-center gap-2 mb-4">
                      <i className="fas fa-envelope call-icon ad_icon_contact"></i>
                      <div>
                        <div className="label">Sent Email</div>
                        <a href={`mailto:${info.email}`} className="underline value">
                          {info.email}
                        </a>
                      </div>
                    </div>

                    <div className="info-box d-flex align-items-center gap-2 mb-4">
                      <i className="fas fa-map-marker-alt call-icon ad_icon_contact"></i>
                      <div>
                        <div className="label">Our Locations</div>
                        <div className="value">{info.address}</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div className="contact-form">
                <h3 className="text-uppercase fw-bold mb-4 text-center">Get In Touch</h3>
                {success && <Alert variant="success">{success}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                {loading && <p>Sending message...</p>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-dark text-white border-secondary"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-dark text-white border-secondary"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="subject" className="mb-3">
                    <Form.Control
                      type="text" // Corrected here
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-dark text-white border-secondary"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-dark text-white border-secondary"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="privacyPolicy" className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="I agree to the Terms & Conditions"
                      name="privacy_policy"
                      checked={formData.privacy_policy}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="warning" type="submit" className="text-white w-100" disabled={loading}>
                    {loading ? "Sending..." : "SEND MESSAGE"}
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
