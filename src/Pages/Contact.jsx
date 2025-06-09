import React ,{ useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess("Message sent successfully! Check your email.");
        setError("");
      } else {
        setError("Failed to send message.");
        setSuccess("");
      }
    } catch (err) {
      setError("Something went wrong!");
      setSuccess("");
    }
  };


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

                <div className="info-box d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fas fa-phone ad_icon_contact"></i>
                    <div>
                      <div className="label">Call Us Now</div>
                      <div className="value">+9(1234) 567 220</div>
                    </div>
                  </div>
                </div>

                <div className="info-box d-flex align-items-center gap-2 mb-4">
                  <i className="fas fa-envelope call-icon ad_icon_contact"></i>
                  <div>
                    <div className="label">Sent Email</div>
                    <div className="value">example@yahoo.com</div>
                  </div>
                </div>

                <div className="info-box d-flex align-items-center gap-2 mb-4">
                  <i className="fas fa-map-marker-alt call-icon ad_icon_contact"></i>
                  <div>
                    <div className="label">Our Locations</div>
                    <div className="value">Ex:133 ABSCS Dehradun - 0000</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 ">
      <div className="contact-form">
        <h3 className="text-uppercase fw-bold mb-4 text-center">Get In Touch</h3>
        {success && <Alert variant="success">{success}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

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

          <Button variant="warning" type="submit" className="text-white w-100">
            SEND MESSAGE
          </Button>
        </Form>
      </div>
    </div>
          </div>
        </div>
      </section>
    </>

  )};



export default Contact
