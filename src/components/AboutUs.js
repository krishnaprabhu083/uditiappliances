// AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4">About Udity Washing Machine</h1>
        <p className="lead">
          Revolutionizing laundry with high-quality, efficient, and durable washing machines tailored to meet the needs of every household.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <h2 className="h3">Our Vision</h2>
          <p>
            At Udity, our vision is to make laundry simple, efficient, and accessible. We aim to provide machines that bring ease and satisfaction to our customers’ daily lives.
          </p>
        </div>
        <div className="col-lg-6 mb-4">
          <h2 className="h3">Our Commitment</h2>
          <p>
            We are committed to building trust with every wash. With a focus on sustainability, innovation, and customer satisfaction, we strive to be your go-to brand for washing machines.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title h4">Our Products</h3>
              <ul className="list-unstyled">
                <li><strong>6 KG Capacity:</strong> Perfect for smaller families or individuals, this model is compact yet powerful.</li>
                <li><strong>8 KG Capacity:</strong> Ideal for medium-sized households, balancing power and capacity.</li>
                <li><strong>9 KG Capacity - Advance Buzzer Model:</strong> Built for larger families, offering advanced functionality.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title h4">Why Choose Udity?</h3>
              <ul className="list-unstyled">
                <li><strong>Quality Assurance:</strong> Built to last with rigorous quality checks.</li>
                <li><strong>Affordable Pricing:</strong> Competitive pricing without compromising quality.</li>
                <li><strong>Customer Support:</strong> Dedicated support for a seamless experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center">
          <h2 className="h3 mb-4">Reach Us</h2>
          <div className="row">
            <div className="col-md-3">
              <p><strong>Branch 1:</strong></p>
              <p>Ground Floor 19/926/3 Mannuthy Elvira Complex</p>
              <p>Thrissur, Thrissur-680651</p>
              <p>Kerala, India</p>
            </div>
            <div className="col-md-3">
              <p><strong>Branch 2:</strong></p>
              <p>5/918, Shornur Road, Pirayir (PO)</p>
              <p>Meppermba, Palakkad-678004</p>
              <p>Kerala, India</p>
            </div>
            <div className="col-md-3">
              <p><strong>Branch 3:</strong></p>
              <p>Four Wing Avenue, Panniyankara</p>
              <p>Calicut-673003</p>
              <p>Kerala, India</p>
            </div>
            <div className="col-md-3">
              <p><strong>Branch 4:</strong></p>
              <p>Aryad South Village, Ambalappuzha Thaluk</p>
              <p>Alappuzha-688008</p>
              <p>Kerala, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
