import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone number field
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send(
      'service_osa41lf',    // Replace with your EmailJS service ID
      'template_ilqjady',   // Replace with your EmailJS template ID
      formData,             // This is the form data you want to send
      'fowK4Gjcz5lJ0K9lC'   // Replace with your EmailJS user ID (public key)
    )
    .then((result) => {
      console.log('Email successfully sent:', result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.error('There was an error sending the email:', error);
      alert('Failed to send message. Please try again.');
    });

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '', // Reset phone number
      message: '',
    });
  };

  return (
    <div className="contact-container my-5">
      <h2 className="contact-title">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="mb-4">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control contact-input"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control contact-input"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="number" 
            className="form-control contact-input"
            id="phone"
            name="phone" // Name attribute for phone
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control contact-input"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary contact-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
