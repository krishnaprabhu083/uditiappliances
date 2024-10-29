import React from 'react';
import pumpImg1 from "../../Assets/Pump/pumpImg1.png"; // Replace with actual image paths
import pumpImg2 from "../../Assets/Pump/pumpImg2.png"; // Replace with actual image paths

const PumpTypes = () => {

  const pumpTypes = [
    {
      id: 401,
      name: 'Self priming 1Hp pump ',
      price: '₹3900 (Including GST)',
      description: 'Domestic centrifugal pump with AS PER ISI certification, suitable for homes, hospitals, and industries.',
      images: [pumpImg1],
      specifications: {
        brand: 'Lakshmi',
        model: 'Self priming 1Hp pump',
        usageType: 'Domestic',
        color: 'Multicolor',
        bodyMaterial: 'Aluminium',
        applications: 'HOME, HOSPITAL, Industry',
        adjustableSpeed: 'No',
        certification: 'AS PER ISI',
        flowRate: '20 Lpm',
        totalHead: '33 m',
        inletSize: '25 mm',
        outletSize: '25 mm',
        pressure: '3 Bar',
        phase: 'Single-phase',
        thermalOverloadProtector: 'Yes',
        powerSupply: 'AC',
        powerRating: '0.74 kW',
        motorPower: '1 HP',
        weight: '7.5 kg',
        warranty: '12 Months (Pump Only)',
        serviceType: 'By Havells service center',
        coveredInWarranty: 'Pump',
        notCoveredInWarranty: 'physical damage, capacitor, bearing, mechanical seal does not contain any kind of warranty',
        additionalInfo: 'Controller does not contain any warranty.',
      },
    },
    {
      id: 402,
      name: '1HP Open Well Submersible Pump with Panel',
      price: '5900 (Including GST)',
      description: 'Domestic submersible pump with high flow rate and corrosion resistance, made in India.',
      images: [pumpImg2],
      specifications: {
        brand: 'Lakshmi',
        model: '1HP Open Well Submersible Pump with Panel',
        usageType: 'Domestic',
        color: 'Multicolor',
        flowRate: '120 Lpm',
        totalHead: '30 m',
        phase: 'Single-phase',
        thermalOverloadProtector: 'Yes',
        powerSupply: '220 V',
        powerRating: '0.75 kW',
        motorPower: '1 HP',
        weight: '17 kg',
        corrosionResistant: 'Yes',
        otherFeatures: 'CED Coating - No Corrosion',
        warranty: '1 Year Warranty',
        coveredInWarranty: 'Internal wiring',
        notCoveredInWarranty: 'Dry run and Physical Damages Are Not Covered in Warranty',
      },
    },
  ];
  
  

  // const handleCardClick = (pumpId) => {
  //   navigate(`/pump/${pumpId}`);
  // };
  const handleCardClick = (product) => {
    const { name, price } = product; // Extract name and price from the product object
    const message = `Hi, I would like to buy the ${name} for ${price}.`;
    const whatsappUrl = `https://wa.me/8122886743?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank'); // Open WhatsApp with the message
  };
  

  return (
    <div className="container my-3">
      
      <h2 
        className="appliance-header">
             Explore Our Pump Types

      </h2>
      {/* Responsive Grid */}
      <div className="row justify-content-center">
  {pumpTypes.map((type) => (
    <div className="col-sm-12 col-md-6 col-lg-5 mb-4" key={type.id}>
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
        <div id={`carousel-${type.id}`} className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {type.images.map((image, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img
                  src={image}
                  className="d-block w-100"
                  alt={type.name}
                  style={{ height: '250px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${type.id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${type.id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Card Body */}
        <div className="card-body d-flex flex-column p-4" style={{ backgroundColor: '#ffffff' }}>
        <h5 className="card-title text-muted fw-bold mb-3">
      {type.name}
    </h5>
    <p className="card-text text-muted mb-4">{type.description}</p>
    <h6 className="text-primary font-weight-bold mb-3">
      Price: {type.price}
    </h6>

          <div className="">
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
<ul className="list-unstyled text-secondary mb-0">  
  {/* General Information */}
  <li className="my-3 bg-light p-2">
    <h6 className="fw-bold text-secondary">General Information:</h6>
  </li>
  <li className="mb-2"><strong>Brand:</strong> <span className="text-muted">{type.specifications.brand}</span></li>
  <li className="mb-2"><strong>Model:</strong> <span className="text-muted">{type.specifications.model}</span></li>
  <li className="mb-2"><strong>Type:</strong> <span className="text-muted">{type.specifications.type}</span></li>
  <li className="mb-2"><strong>Usage Type:</strong> <span className="text-muted">{type.specifications.usageType}</span></li>
  <li className="mb-2"><strong>Color:</strong> <span className="text-muted">{type.specifications.color}</span></li>

  {/* Performance Specifications */}
  <li className="my-3 bg-light p-2">
    <h6 className="fw-bold text-secondary">Performance Specifications:</h6>
  </li>
  <li className="mb-2"><strong>Flow Rate:</strong> <span className="text-muted">{type.specifications.flowRate}</span></li>
  <li className="mb-2"><strong>Total Head:</strong> <span className="text-muted">{type.specifications.totalHead}</span></li>
  
  {/* Additional Features */}
  <li className="my-3 bg-light p-2">
    <h6 className="fw-bold text-secondary">Additional Features:</h6>
  </li>
  <li className="mb-2"><strong>Thermal Overload Protector:</strong> <span className="text-muted">{type.specifications.thermalOverloadProtector}</span></li>

  {/* Power Specifications */}
  <li className="my-3 bg-light p-2">
    <h6 className="fw-bold text-secondary">Power Specifications:</h6>
  </li>
  <li className="mb-2"><strong>Power Supply:</strong> <span className="text-muted">{type.specifications.powerSupply}</span></li>
  <li className="mb-2"><strong>Power Rating:</strong> <span className="text-muted">{type.specifications.powerRating}</span></li>
  <li className="mb-2"><strong>Motor Power:</strong> <span className="text-muted">{type.specifications.motorPower}</span></li>

  {/* Weight and Warranty */}
  <li className="my-3 bg-light p-2">
    <h6 className="fw-bold text-secondary">Weight and Warranty:</h6>
  </li>
  <li className="mb-2"><strong>Weight:</strong> <span className="text-muted">{type.specifications.weight}</span></li>
  <li className="mb-2"><strong>Warranty:</strong> <span className="text-muted">{type.specifications.warranty}</span></li>
  <li className="mb-2"><strong>Covered in Warranty:</strong> <span className="text-muted">{type.specifications.coveredInWarranty}</span></li>
  <li><strong>Not Covered in Warranty:</strong> <span className="text-muted">{type.specifications.notCoveredInWarranty.toLowerCase()}</span></li>
</ul>


            <p className="mt-2"><strong>Note:</strong> {type.specifications.additionalInfo}</p>
          </div>

          <div className="text-center mt-4">
          <button 
  onClick={() => handleCardClick(type)} // Call the function with the entire product object
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
    </div>
  ))}
</div>

    </div>
  );
};

export default PumpTypes;
