import React from 'react'

const Contact = () => {
  return (
    <section className="our_client py-3 py-5">
      <div className="container">
        <div className="row">
          {/* Left Column: Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="/images/contactus.jpg"
              alt="Contact Us"
              className="img-fluid rounded shadow _ad_img"
            />
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title mb-4 text-center">Contact Us</h3>
                <form action="#" method="post">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" name="subject" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact
