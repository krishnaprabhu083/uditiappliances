import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-4">
      <div className="container">
        <p>&copy; 2024 Uditi. All rights reserved.</p>

        {/* Social Links */}
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
            href="https://youtube.com/@uditiappliances?si=gl9BEL7eelamFZrV"
            target="_blank" 
            rel="noopener noreferrer" 
            className="youtube mx-2 icon-hover"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>

        {/* Footer Links */}
        <div className="footer-links mb-3">
          <a href="/aboutus" className="text-white mx-2">About Us</a>
          <a href="/contact" className="text-white mx-2">Contact</a>
          <a href="/privacy-policy" className="text-white mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-white mx-2">Terms of Service</a>
        </div>

        {/* Reach Us Section */}
        <div className="row text-center mt-4">
          <div className="col-12">
            <h2 className="h3 mb-4 mt-4">Reach Us</h2>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <p><strong>Branch 1:</strong></p>
            <p>Ground Floor 19/926/3 Mannuthy Elvira Complex</p>
            <p>Thrissur, Thrissur-680651</p>
            <p>Kerala, India</p>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <p><strong>Branch 2:</strong></p>
            <p>5/918, Shornur Road, Pirayir (PO)</p>
            <p>Meppermba, Palakkad-678004</p>
            <p>Kerala, India</p>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <p><strong>Branch 3:</strong></p>
            <p>Four Wing Avenue, Panniyankara</p>
            <p>Calicut-673003</p>
            <p>Kerala, India</p>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <p><strong>Branch 4:</strong></p>
            <p>Aryad South Village, Ambalappuzha Thaluk</p>
            <p>Alappuzha-688008</p>
            <p>Kerala, India</p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="small mt-4">
          We strive to provide the best service possible. Follow us on social media for updates and offers!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
