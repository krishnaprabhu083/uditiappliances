import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-4">
      <div className="container">
        <p>&copy; 2024 Uditi. All rights reserved.</p>

        <div className="social-links mb-3">
          <a 
            href="https://wa.me/8122886743" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp mx-2 icon-hover"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp fa-2x"></i>
          </a>
          <a 
            href="https://www.instagram.com/uditiwashingmachine" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="instagram mx-2 icon-hover"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a 
            href="https://www.facebook.com/share/EXNX85ujE1WTEhyn/?mibextid=LQQJ4d" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="facebook mx-2 icon-hover"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a 
            href="https://youtube.com/@uditiappliances?si=gl9BEL7eelamFZrV" // Your YouTube link
            target="_blank" 
            rel="noopener noreferrer" 
            className="youtube mx-2 icon-hover"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>

        <div className="footer-links mb-3">
          <a href="/aboutus" className="text-white mx-2">About Us</a>
          <a href="/contact" className="text-white mx-2">Contact</a>
          <a href="/privacy-policy" className="text-white mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-white mx-2">Terms of Service</a>
        </div>

        <p className="small">We strive to provide the best service possible. Follow us on social media for updates and offers!</p>
      </div>
    </footer>
  );
};

export default Footer;
