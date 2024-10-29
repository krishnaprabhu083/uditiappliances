import React from 'react';
import cherryred from "../../Assets/Grinder/cherryred.png";
import grinderorange from "../../Assets/Grinder/grinder orange.png";
import grinder2 from "../../Assets/Grinder/grinderImg1.png"; // Replace with another image path
import grinderImg3 from "../../Assets/Grinder/grinderImg3.png"; // Replace with another image path
import grinderImg4 from "../../Assets/Grinder/grinderImg4.png"; // Replace with another image path

const GrinderTypes = () => {

  const grinderTypes = [
    {
      id: 301,
      name: 'Table Top Wet Grinder',
      price: '₹2900 (Including GST)',
      description: 'Ideal for small families, comes with a robust motor for efficient grinding.',
      images: [cherryred, grinderImg3, grinderImg4],
      specifications: {
        brandColor: 'cherryred',
        bodyMaterial: 'ABS',
        color: 'White',
        capacity: '2 Liters',
        motorSpeed: '1440 rpm',
        numberOfStones: 2,
        attachments: 'Atta Kneader, Coconut Scraper',
        motorOverloadProtection: 'Yes',
        autoOff: 'No',
        safetyLock: 'Yes',
        powerRequirement: '220 Volts',
        powerConsumption: '150 W',
        dimensions: {
          width: '12 inches',
          height: '12 inches',
          depth: '12 inches',
        },
        weight: '12 kg',
        warranty: {
          summary: '1 Year Warranty on Motor Against Manufacturing Defects',
          serviceType: 'Motor',
          coveredInWarranty: 'Yes',
          notCoveredInWarranty: 'No',
        },
        additionalInfo: 'Free Coconut Scraper and Atta Kneader included.',
      },
    },
    {
      id: 302,
      name: 'Tilting Wet Grinder',
      price: '₹3900 (Including GST)',
      description: 'Durable tilting wet grinder with essential attachments for efficient grinding.',
      images: [grinder2,grinderorange, grinderImg3, grinderImg4],
      specifications: {
        brandColor: 'Orange and Pink available',
        bodyMaterial: 'ABS',
        color: 'Orange',
        capacity: '2 Liters',
        motorSpeed: '1440 RPM',
        numberOfStones: 2,
        attachments: 'Atta Kneader, Coconut Scraper',
        motorOverloadProtection: 'Yes',
        autoOff: 'No',
        safetyLock: 'Yes',
        powerRequirement: '220 Volts',
        powerConsumption: '150 W',
        dimensions: {
          width: '12.5 inches',
          height: '20.5 inches',
          depth: '20 inches',
        },
        weight: '14 kg',
        warranty: {
          summary: '1 Year Warranty on Motor Against Manufacturing Defects',
          serviceType: 'Motor',
          coveredInWarranty: 'Yes',
          notCoveredInWarranty: 'No',
        },
        additionalInfo: 'Free Coconut Scraper and Atta Kneader included.',
      },
    },
  ];

  // const handleCardClick = (grinderId) => {
  //   navigate(`/grinder/${grinderId}`);
  // };

  const handleCardClick = (product) => {
    const { name, price } = product; // Extract name and price from the product object
    const message = `Hi, I would like to buy the ${name} for ${price}.`;
    const whatsappUrl = `https://wa.me/8122886743?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank'); // Open WhatsApp with the message
  };
  
  return (
    <div className="container-fluid mt-0 bg-ligh">
     <h2 className="appliance-header">
     Explore Our Grinder Types

</h2>


   

      {/* Responsive Grid */}
      <div className="row justify-content-center">
        {grinderTypes.map(type => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={type.id}>
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
             <h5 className="card-title text-center text-danger fw-bold">{type.name}</h5>
    <p className="card-text text-muted mb-3 text-center">{type.description}</p>
    <p className="text-success font-weight-bold text-center fs-5">{type.price}</p>

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
<ul className="list-unstyled text-muted mb-0">
  {/* Brand and Body Specifications */}
  <li className="mb-4">
    <h6 className="fw-bold text-secondary my-3 bg-light p-2 rounded shadow-sm">Brand and Body</h6>
    <ul className="list-unstyled mb-0">
      <li className="mb-2">
        <strong>Brand Color:</strong> <span className="text-secondary">{type.specifications.brandColor}</span>
      </li>
      <li className="mb-2">
        <strong>Body Material:</strong> <span className="text-secondary">{type.specifications.bodyMaterial}</span>
      </li>
      <li className="mb-2">
        <strong>Color:</strong> <span className="text-secondary">{type.specifications.color}</span>
      </li>
    </ul>
  </li>

  {/* Performance Specifications */}
  <li className="mb-4">
    <h6 className="fw-bold text-secondary my-3 bg-light p-2 rounded shadow-sm">Performance</h6>
    <ul className="list-unstyled mb-0">
      <li className="mb-2">
        <strong>Capacity:</strong> <span className="text-secondary">{type.specifications.capacity}</span>
      </li>
      <li className="mb-2">
        <strong>Motor Speed:</strong> <span className="text-secondary">{type.specifications.motorSpeed}</span>
      </li>
      <li className="mb-2">
        <strong>Number of Stones:</strong> <span className="text-secondary">{type.specifications.numberOfStones}</span>
      </li>
      <li className="mb-2">
        <strong>Motor Overload Protection:</strong> <span className="text-secondary">{type.specifications.motorOverloadProtection}</span>
      </li>
      <li className="mb-2">
        <strong>Auto Off:</strong> <span className="text-secondary">{type.specifications.autoOff}</span>
      </li>
      <li className="mb-2">
        <strong>Safety Lock:</strong> <span className="text-secondary">{type.specifications.safetyLock}</span>
      </li>
    </ul>
  </li>

  {/* Power Specifications */}
  <li className="mb-4">
    <h6 className="fw-bold text-secondary my-3 bg-light p-2 rounded shadow-sm">Power</h6>
    <ul className="list-unstyled mb-0">
      <li className="mb-2">
        <strong>Power Requirement:</strong> <span className="text-secondary">{type.specifications.powerRequirement}</span>
      </li>
      <li className="mb-2">
        <strong>Power Consumption:</strong> <span className="text-secondary">{type.specifications.powerConsumption}</span>
      </li>
    </ul>
  </li>

  {/* Dimensions */}
  <li className="mb-4">
    <h6 className="fw-bold text-secondary my-3 bg-light p-2 rounded shadow-sm">Dimensions</h6>
    <ul className="list-unstyled mb-0">
      <li className="mb-2">
        <strong>Width:</strong> <span className="text-secondary">{type.specifications.dimensions.width}</span>
      </li>
      <li className="mb-2">
        <strong>Height:</strong> <span className="text-secondary">{type.specifications.dimensions.height}</span>
      </li>
      <li className="mb-2">
        <strong>Depth:</strong> <span className="text-secondary">{type.specifications.dimensions.depth}</span>
      </li>
    </ul>
  </li>

  {/* Weight and Warranty */}
  <li className="mb-4">
    <h6 className="fw-bold text-secondary my-3 bg-light p-2 rounded shadow-sm">Weight and Warranty</h6>
    <ul className="list-unstyled mb-0">
      <li className="mb-2">
        <strong>Weight:</strong> <span className="text-secondary">{type.specifications.weight}</span>
      </li>
      <li className="mb-2">
        <strong>Warranty Summary:</strong> <span className="text-secondary">{type.specifications.warranty.summary}</span>
      </li>
      <li className="mb-2">
        <strong>Warranty Service Type:</strong> <span className="text-secondary">{type.specifications.warranty.serviceType}</span>
      </li>
      <li className="mb-2">
        <strong>Covered in Warranty:</strong> <span className="text-secondary">{type.specifications.warranty.coveredInWarranty}</span>
      </li>
      <li className="mb-2">
        <strong>Not Covered in Warranty:</strong> <span className="text-secondary">{type.specifications.warranty.notCoveredInWarranty}</span>
      </li>
    </ul>
  </li>
</ul>




  {/* Note Section */}
  <div className="mt-3 p-2 border rounded" style={{ backgroundColor: '#f9f9f9' }}>
    <strong>Note:</strong> <span className="text-secondary">{type.specifications.additionalInfo}</span>
  </div>

  {/* Clickable Button */}
  <div className="text-center mt-4">
  <button 
          onClick={() => handleCardClick(type)} // Pass the entire product object
          className="btn mt-auto rounded-pill shadow-sm w-100"
          style={{ 
            background: 'linear-gradient(45deg, #28a745, #218838)', 
            transition: 'background-color 0.3s, transform 0.3s',
            color: '#fff',
            border: 'none'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'linear-gradient(45deg, #218838, #1e7e34)'} 
          onMouseOut={(e) => e.currentTarget.style.background = 'linear-gradient(45deg, #28a745, #218838)'} 
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

export default GrinderTypes;
