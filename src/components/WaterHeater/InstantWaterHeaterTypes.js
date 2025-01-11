import React from 'react';
import premiummain from "../../Assets/Heater/premiummain.jpg";
import premiummain2 from "../../Assets/Heater/premium-removebg-preview.png";
import classic from "../../Assets/Heater/classic-removebg-preview.png";
import classic2 from "../../Assets/Heater/classic.png";
import economymain from "../../Assets/Heater/economymain.png"; // Replace with the actual image path
import economy2 from "../../Assets/Heater/eco.png"; 
import additonalImg from "../../Assets/Heater/additonal.png";
import specboxImg from "../../Assets/Heater/specbox.jpg";
import box from "../../Assets/Heater/box.jpg";

const InstantWaterHeaterTypes = () => {

  const waterHeaterModels = [
    {
      id: 301,
      name: 'Premium Model Water Heater',
      price: '₹3411',
      capacity: '1 liter',
      inletOutlet: 'Threaded Inlet / Outlet',
      warranty: '10 Years',
      color: 'Black',
      images: [premiummain,premiummain2, additonalImg,box,specboxImg ], // Add more images as needed
      power: {
        current: '1 hour runs will take 2½ units',
        mcb: '16A MCB',
        switch: '16A On/Off Switch',
      },
      features: [
        'Durable ABS Tank',
        '24/7 heat water guarantee',
        'Shock and water proof',
        'Thermostat available (automatically cuts off if temperature exceeds 70°C)',
      ],
    },
    {
      id: 302,
      name: 'Classic Model Water Heater',
      price: '₹2,924',
      capacity: '1 liter',
      inletOutlet: 'N/A',
      warranty: '10 Years',
      color: 'Grey',
      images: [classic, classic2  ,box, specboxImg], // Add more images as needed
      power: {
        current: '1 hour runs will take 2½ units',
        switch: '16A On/Off Switch only',
      },
      features: [
        'Durable ABS Tank',
        '24/7 heat water guarantee',
        'Shock and water proof',
        'Thermostat available (automatically cuts off if temperature exceeds 70°C)',
      ],
    },
    {
      id: 303,
      name: 'Economy Model Water Heater',
      price: '₹2,158',
      capacity: '750 ml',
      inletOutlet: 'N/A',
      warranty: '10 Years',
      color: 'Grey and Black',
      images: [economymain, economy2,box, specboxImg], // Add more images as needed
      power: {
        current: '1 hour runs will take 2½ units',
        switch: 'N/A',
      },
      features: [
        'PP Tank',
        '24/7 heat water guarantee',
        'Shock and water proof',
        'Compact stand',
        'Thermostat available (automatically cuts off if temperature exceeds 70°C)',
      ],
    },
  ];

  // const handleCardClick = (modelId) => {
  //   navigate(`/water-heater/specifications/${modelId}`);
  // };
  const handleCardClick = (product) => {
    const { name, price } = product; // Extract name and price from the product object
    const message = `Hi, I would like to buy the ${name} for ${price}.`;
    const whatsappUrl = `https://wa.me/8122886743?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank'); // Open WhatsApp with the message
  };
  
  return (
    <div className="container">
      <h2 
        className="appliance-header"
        
      >
         Explore Our Instant Water Heater Models
       
      </h2>
      <div className="row">
        {waterHeaterModels.map((model) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4 mt-2" key={model.id}>
    <div 
  className="card border-0 rounded-lg h-100" 
  style={{ 
    borderRadius: '1rem', 
    overflow: 'hidden', 
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)', 
    transition: 'transform 0.2s, box-shadow 0.2s'
  }}
  
>
              {/* Carousel Section */}
              <div id={`carousel-${model.id}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {model.images.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                      <img
                        src={image}
                        className="d-block w-100"
                        alt={model.name}
                        style={{
                          height: '250px',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${model.id}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${model.id}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="card-body d-flex flex-column p-4 text-muted" style={{ backgroundColor: '#ffffff' }}>
                <h6 
                  className="card-title fw-bold text-uppercase" 
                  style={{ fontSize: '1.2rem', letterSpacing: '0.5px' }}
                >
                  {model.name}
                </h6>
                <p className="card-text text-secondary mb-2" style={{ fontSize: '1rem' }}>
                  <strong>Price:</strong> {model.price}
                </p>

                {/* Specifications */}
                <h3
  className="mt-3 p-2 rounded fw-bold mb-3"
  style={{
    fontSize: '1rem',
    background: 'linear-gradient(45deg, #343a40, #495057)', // Gradient background
    color: '#ffffff' // Text color for better contrast
  }}
>
  Specifications
</h3>
<ul 
  className="list-unstyled" 
  style={{ 
    fontSize: '0.95rem', 
    margin: '0', 
    padding: '0' 
  }}
>
  <li style={{ marginBottom: '0.5rem' }}><strong>Capacity:</strong> {model.capacity}</li>
  <li style={{ marginBottom: '0.5rem' }}><strong>Color:</strong> {model.color}</li>
  <li style={{ marginBottom: '0.5rem' }}><strong>Inlet/Outlet:</strong> {model.inletOutlet}</li>
  <li style={{ marginBottom: '0.5rem' }}><strong>Warranty:</strong> {model.warranty}</li>
  <li style={{ marginBottom: '0.5rem' }}><strong>Power Consumption:</strong> {model.power.current}</li>
  {model.power.mcb && <li style={{ marginBottom: '0.5rem' }}><strong>MCB:</strong> {model.power.mcb}</li>}
  {model.power.switch && <li style={{ marginBottom: '0.5rem' }}><strong>Switch:</strong> {model.power.switch}</li>}
  <li style={{ marginBottom: '0.5rem' }}><strong>Features:</strong></li>
  <ul 
    style={{ 
      paddingLeft: '1.5rem', 
      margin: '0' // Ensure no extra margin for nested ul
    }}
  >
    {model.features.map((feature, index) => (
      <li key={index} style={{ marginBottom: '0.5rem' }}>• {feature}</li>
    ))}
  </ul>
</ul>


                {/* Button */}
                <button 
  onClick={() => handleCardClick(model)} // Call the function with the entire product object
  className="btn mt-auto rounded-pill shadow-sm w-100"
  style={{ 
    background: 'linear-gradient(45deg, #28a745, #218838)', // Change to a green gradient background
    transition: 'background-color 0.3s, transform 0.3s',
    color: '#fff', // Text color for better contrast
    border: 'none' // Remove border for a cleaner look
  }}
  onMouseOver={(e) => e.currentTarget.style.background = 'linear-gradient(45deg, #218838, #1e7e34)'} // Darker gradient on hover
  onMouseOut={(e) => e.currentTarget.style.background = 'linear-gradient(45deg, #28a745, #218838)'} // Original gradient on mouse out
>
  Buy Now
</button>



              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstantWaterHeaterTypes;
