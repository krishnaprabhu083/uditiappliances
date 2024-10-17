import React from 'react';
import whashingImg from '../Assets/udity.webp';
import whashingImg2 from '../Assets/washImg2.png';
import whashingImg3 from '../Assets/washImg3.png';
import whashingImg4 from '../Assets/IMG8.png';
import logo from "../Assets/logo2.png"
import logoU from "../Assets/logoU.png"
import product1 from "../Assets/wasgung.png"
import heater from "../Assets/HEATER 2.jpg"
import OurProducts from './OurProducts'

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Washing Machine',
      description: 'High-efficiency washing machine with multiple settings.',
      price: '$499',
      image: product1,
    },
    {
      id: 2,
      name: 'Water',
      description: 'Durable grinder perfect for spices and coffee.',
      price: '$99',
      image: heater
    },
    {
      id: 3,
      name: 'Pump',
      description: 'Reliable pump for various applications.',
      price: '$199',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Refrigerator',
      description: 'Energy-efficient refrigerator with ample storage.',
      price: '$899',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Microwave',
      description: 'Compact microwave with multiple cooking modes.',
      price: '$149',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Air Conditioner',
      description: 'Cooling solution with energy-saving technology.',
      price: '$599',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div
    className="container-fluid text-center"
    style={{
      background: "linear-gradient(180deg, #f8f9fa, #e9ecef)",
      borderRadius: "0.5rem",
    }}
  >
    <div className="welcome-section container rounded pt-3">
      <div className="row justify-content-center text-center">
        <div className="col-lg-9 col-md-10 col-12 mb-4">
          {/* Logo */}
          <img 
            src={logo} 
            alt="Uditi Appliances Logo" 
            style={{ 
              width: "100px", 
              height: "95px", 
              marginBottom: "0rem",
              maxWidth: '100%', // Responsive image
            }} 
          />
          
          {/* Title and Description */}
          <h4 
            className="fw-bold mb-0" 
            style={{ fontSize: "2.2rem", position: "relative" }}
          >
            <span className='fw-bold' style={{ fontSize: "inherit" }}>
              <img 
                src={logoU} 
                alt="Uditi Logo" 
                style={{ 
                  width: "35px", 
                  marginBottom: "28px",
                  maxWidth: '100%', // Responsive image
                }} 
              />
            </span>
            <span className='mt-2'>diti Appliances</span>
            
            {/* Description with responsive font */}
            <p
              className="home-description mt-0 mb-2"
              style={{
                fontSize: "1rem", // Increased size for better readability
                color: "#7f8c8d", // Subtle gray for description
                fontStyle: "italic", // Add italics for sophistication
                letterSpacing: "0.03rem",
              }}
            >
              Smart Appliances, Smart Life...
            </p>
          </h4>
  
          {/* Image of the Washing Machine */}
          <img
            src={whashingImg4}
            alt="Washing Machine"
            className="img-fluid mt-4"
            style={{ 
              width: "100%", 
              maxWidth: '70%', 
              borderRadius: "1rem",
              height: 'auto' // Maintain aspect ratio
            }}
          />
        </div>
      </div>
    </div>
  
    {/* OurProducts Section */}
    <div className="products-container container">
      <OurProducts />
    </div>
  </div>
  
  );
};

export default Home;
