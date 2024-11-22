// AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4">About Uditi Washing Machine</h1>
        <p className="lead">
          Revolutionizing laundry with high-quality, efficient, and durable washing machines tailored to meet the needs of every household.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <h2 className="h3">Our Vision</h2>
          <p>
            At Uditi, our vision is to make laundry simple, efficient, and accessible. We aim to provide machines that bring ease and satisfaction to our customers’ daily lives.
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
              <h3 className="card-title h4">Why Choose Uditi?</h3>
              <ul className="list-unstyled">
                <li><strong>Quality Assurance:</strong> Built to last with rigorous quality checks.</li>
                <li><strong>Affordable Pricing:</strong> Competitive pricing without compromising quality.</li>
                <li><strong>Customer Support:</strong> Dedicated support for a seamless experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default AboutUs;
