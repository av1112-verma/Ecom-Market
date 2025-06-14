import React, {useState} from 'react'
import { Form, Button, Alert } from "react-bootstrap";

const Career = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    cv: null, 
    message: '',
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cv') {
      setFormData({ ...formData, cv: files[0] }); 
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('position', formData.position);
    data.append('cv', formData.cv); 
    data.append('message', formData.message);

    try {
      const response = await fetch('https://test.pearl-developer.com/econ-market/api/carrer', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("Application submitted successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          cv: null,
          message: '',
        });
        document.getElementById('cv').value = ''; // Reset file input
        console.log("Form Data:", result); 
      } else {
        setError(result.message || "Something went wrong!");
        console.log("Form Data:", result); 
      }
    } catch (err) {
      setError("Error submitting form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <section className='py-5 career_section'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="career_content">
                <h2><span className='metric'>Metric Wave</span> <span className='insight'>Insights</span> - Join Our Team</h2>
                <p>At Metric Wave Insights, we're passionate about uncovering insights that drive business decisions. Our team of dedicated professionals works at the intersection of data, analytics, and strategic thinking to deliver actionable market intelligence to our clients.</p>
                <div className="career_data">
                  <h5>Why Metric Wave Insights?</h5>
                  <p>We believe in creating an environment where talented individuals can thrive. When you join our team, you'll be part of an organization that values</p>
                  <ul>
                    <li><strong>Innovation:</strong>We constantly seek new approaches to solve complex market challenges</li>
                    <li><strong>Collaboration:</strong>Our success comes from combining diverse perspectives and expertise</li>
                    <li><strong>Growth:</strong>We invest in your professional development and career advancement</li>
                    <li><strong>Impact:</strong>Your work directly influences strategic decisions for leading brands</li>
                  </ul>
                </div>
                <div className="career_data">
                  <h5>Our Culture</h5>
                  <p>Our workplace culture emphasizes both excellence and balance. We foster an atmosphere of intellectual curiosity, mutual respect, and recognition for outstanding contributions. Our team members enjoy flexible work arrangements, competitive compensation, and opportunities to make meaningful connections with colleagues.</p>
                </div>
                <div className="career_data">
                  <h5>Current Opportunities</h5>
                  <p>We're always looking for talented individuals to join our growing team. Whether you're an experienced market researcher, a data analyst, or an operations professional, we may have the perfect role for you. To learn more about current opportunities, please send your resume and a brief cover letter to</p>
                  <a href="#">hr@iconMarketresearch.com.</a>
                </div>
              </div>
            </div>
           <div className="col-md-6">
              <div className="contact-form">
                <h3 className="text-uppercase fw-bold mb-4 text-center">Please fill in the below form.</h3>
                {success && <Alert variant="success">{success}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                {loading && <p>Sending message...</p>}

                <Form onSubmit={handleSubmit} encType="multipart/form-data">
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

                  <Form.Group controlId="formPhone" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-dark text-white border-secondary"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPosition" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="bg-dark text-white border-secondary"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="cv" className="mb-3">
                    <Form.Control
                      type="file"
                      name="cv"
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

                  <Button variant="warning" type="submit" className="text-white w-100" disabled={loading}>
                    {loading ? "Sending..." : "SEND APPLICATION"}
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Career