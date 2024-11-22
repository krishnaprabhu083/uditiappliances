import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact-containe py-4" style={{ backgroundColor: "#ecf0f1", padding: "60px 0" }}>
      <div className="container">
        {/* Title and description */}
        <h2 className="fw-bold text-center mb-4" style={{ color: "#2980b9", fontSize: "2.5rem" }}>
          Contact Us
        </h2>
        <p className="text-center mb-5" style={{ fontSize: "1.1rem", color: "#7f8c8d", lineHeight: '1.6' }}>
          Have questions or need more information? Reach out to us!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form row col-12 p-lg-3 p-2 py-3" style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Full Name */}
          <div className="mb-4 text-start col-lg-6">
            <label htmlFor="name" className="form-label" style={{ fontSize: "1.1rem", fontWeight: "600",color: "#7f8c8d" }}>Full Name</label>
            <input
              type="text"
              className="form-control contact-input"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                borderRadius: "0.5rem",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                fontSize: "1rem",
                padding: "0.8rem 1.2rem",
                transition: "border 0.3s ease-in-out",
              }}
            />
          </div>

          {/* Email Address */}
          <div className="mb-4 text-start col-lg-6">
            <label htmlFor="email" className="form-label" style={{ fontSize: "1.1rem",fontWeight: "600",color: "#7f8c8d"}}>Email Address</label>
            <input
              type="email"
              className="form-control contact-input"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                borderRadius: "0.5rem",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                fontSize: "1rem",
                padding: "0.8rem 1.2rem",
                transition: "border 0.3s ease-in-out",
              }}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4 text-start">
            <label htmlFor="phone" className="form-label" style={{ fontSize: "1.1rem",fontWeight: "600",color: "#7f8c8d" }}>Phone Number</label>
            <input
              type="number"
              className="form-control contact-input"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                borderRadius: "0.5rem",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                fontSize: "1rem",
                padding: "0.8rem 1.2rem",
                transition: "border 0.3s ease-in-out",
              }}
            />
          </div>

          {/* Message */}
          <div className="mb-4 text-start">
            <label htmlFor="message" className="form-label" style={{ fontSize: "1.1rem", fontWeight: "600",color: "#7f8c8d"}}>Message</label>
            <textarea
              className="form-control contact-input"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                borderRadius: "0.5rem",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                fontSize: "1rem",
                padding: "0.8rem 1.2rem",
                transition: "border 0.3s ease-in-out",
              }}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary contact-button"
              style={{
                backgroundColor: "#2980b9",
                border: "none",
                padding: "14px 35px",
                fontSize: "1.1rem",
                fontWeight: "500",
                borderRadius: "0.5rem",
                transition: "background-color 0.3s ease-in-out",
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#3498db"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#2980b9"}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
