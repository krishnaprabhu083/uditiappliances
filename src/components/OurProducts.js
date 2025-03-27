import React from 'react';
import { Link } from 'react-router-dom';
import product1 from "../Assets/washingMachine/New Whsing Machine.jpeg";
import heatermain from "../Assets/Heater/heatermain.jpg";
import grinderImg from "../Assets/Grinder/grinderImg1.png";
import pumpImg from "../Assets/Pump/pumpImg.png";
import mixyImg from "../Assets/Mixy/MixyNew.jpeg";
import AirCoolerImg from "../Assets/AirCooler/AirCooler.jpeg";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      product: 'WashingMachine',
      name: 'Washing Machine',
      description: 'Efficient washing machine with multiple options.',
      price: '',
      image: product1,
    },
    {
      id: 2,
      product: 'Air Cooler',
      name: 'Air Cooler',
      description: 'Cooling solution with energy-saving technology.',
      price: '',
      image: AirCoolerImg,
    },
    {
      id: 3,
      product: 'WaterHeater',
      name: 'Water Heater',
      description: 'Durable heater perfect for home use.',
      price: '',
      image: heatermain,
    },
    {
      id: 4,
      product: 'Grinder',
      name: 'Grinder',
      description: 'Reliable grinder for various applications.',
      price: '',
      image: grinderImg,
    },
    {
      id: 5,
      product: 'Pump',
      name: 'Pump',
      description: 'Energy-efficient pump with ample performance.',
      price: '',
      image: pumpImg,
    },
    {
      id: 6,
      product: 'Mixy',
      name: 'Mixer Grinder',
      description: 'Powerful mixy with stainless steel blades.',
      price: '',
      image: mixyImg,
  }


  ];

  return (
    <div className="container mt-2 pb-5">
  <h5
    className="appliance-header text-center mb-4"
    style={{
      fontSize: "1.5rem",
      fontWeight: "700",
      textTransform: "uppercase",
      color: "#2c3e50",
      animation: "fade-slide-in 1s ease-in-out",
    }}
  >
    Our Products
  </h5>

  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {products.map((product, index) => (
      
        // Regular Products
        <div
          className="col"
          key={product.id}
          style={{
            animation: `fade-up 1s ease ${index * 0.1}s forwards`,
            opacity: 0,
          }}
        >
          <div
            className="product-card border-0 hover-card bg-white h-100"
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
              backgroundColor: "#fff",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
            }}
          >
            {/* Image Section */}
            <div className="w-100" style={{ height: "250px" }}>
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
                style={{
                  objectFit: "contain",
                  height: "100%",
                  width: "100%",
                  borderRadius: "0.5rem",
                  transition: "transform 0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>

            {/* Card Body */}
            <div className="card-body text-center d-flex flex-column p-3">
              <h5
                className="product-name card-title mb-2"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                }}
              >
                {product.name}
              </h5>
              <p
                className="product-description card-text flex-grow-1"
                style={{
                  color: "#7f8c8d",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                }}
              >
                {product.description}
              </p>
            </div>

            {/* Card Footer */}
            <div
              className="card-footer d-flex justify-content-between align-items-center p-3 h-auto"
              style={{ backgroundColor: "#f9f9f9" }}
            >
              <h6
                className="product-price mb-0"
                style={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  color: "#ff4b2b",
                }}
              >
                {product.price}
              </h6>
              <Link
                to={`/${product.product}`}
                className="btn btn-primary buy-button"
                style={{
                  background: "linear-gradient(45deg, #ff4b2b, #ff416c)",
                  border: "none",
                  padding: "0.6rem 1rem",
                  borderRadius: "0.5rem",
                  fontSize: "0.85rem",
                  transition: "background 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(45deg, #ff416c, #ff4b2b)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(45deg, #ff4b2b, #ff416c)")
                }
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      
    ))}
  </div>

  {/* Animation Styles */}
  <style>
    {`
      @keyframes fade-slide-in {
        0% {
          opacity: 0;
          transform: translateY(-20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fade-up {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>
</div>

  );
};

export default ProductPage;
