import React from 'react';
import washingMachine6kg from "../../Assets/washingMachine/washingMachine6kg-removebg.png"; // Replace with the actual image path
import washingMachine8kg from "../../Assets/washingMachine/washingMachine8kg-removebg.png"; // Replace with another image path
import washingMachine9kg from "../../Assets/washingMachine/washingMachine9kg-removebg.png"; // Replace with another image path

const WashingMachineTypes = () => {
 

  const machineTypes = [
    {
      id: 101,
      name: '6 KG Capacity Washing Machine',
      price: '₹3658 (Including GST)',
      description: 'Compact washing machine perfect for small families. Washes clothes efficiently within 7 to 10 minutes.',
      images: [washingMachine6kg,washingMachine6kg],
      specifications: {
        capacity: '6 KG',
        priceDetails: '₹3100 + GST 18% = ₹3658',
        washTime: '7 to 10 minutes',
        shirts: 6,
        pants: 3,
        sarees: 3,
        bedsheets: 1,
        warranty: '10 Years (1 year full free service, balance 9 years material cost only)',
        motor: 'Quarter HP motor',
        power: '145 Watts',
        dimensions: {
          height: '25 inches',
          weight: '11 kg',
          width: '15 inches',
        },
        additionalInfo: 'We should wash all clothes separately.',
      },
    },
    {
      id: 201,
      name: '8 KG Capacity Washing Machine',
      price: '₹4366 (Including GST)',
      description: 'Versatile washing machine for larger families. Washes clothes efficiently within 7 to 10 minutes.',
      images: [washingMachine8kg, washingMachine8kg, washingMachine8kg],
      specifications: {
        capacity: '8 KG',
        priceDetails: '₹3700 + GST 18% = ₹4366',
        washTime: '7 to 10 minutes',
        shirts: 8,
        pants: 4,
        sarees: 4,
        bedsheets: 1,
        pillowCovers: 1,
        warranty: '10 Years (1 year full free service, balance 9 years material cost only)',
        motor: 'One Third HP motor',
        power: '165 Watts',
        dimensions: {
          height: '25 inches',
          weight: '12 kg',
          width: '15 inches',
        },
        additionalInfo: 'We should wash all clothes separately.',
      },
    },
    {
      id: 202,
      name: '9 KG Capacity Washing Machine',
      price: '₹4799 (Including GST)',
      description: 'Advanced washing machine with buzzer model. Washes clothes efficiently within 7 to 10 minutes.',
      images: [washingMachine9kg, washingMachine9kg],
      specifications: {
        capacity: '9 KG',
        priceDetails: '₹4067 + GST 18% = ₹4799',
        washTime: '7 to 10 minutes',
        shirts: 10,
        pants: 5,
        sarees: 5,
        bedsheets: 1,
        pillowCovers: 1,
        warranty: '10 Years (1 year full free service, balance 9 years material cost only)',
        motor: 'Half HP motor',
        power: '175 Watts',
        dimensions: {
          height: '25 inches',
          weight: '12 kg',
          width: '15 inches',
        },
        additionalInfo: 'We should wash all clothes separately.',
      },
    },
  ];

  // const handleCardClick = (machineId) => {
  //   navigate(`/machine/${machineId}`);
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
          className="appliance-header"
          
        >
          Explore Our Washing Machine Types
        
        </h2>
        {/* Responsive Grid */}
        <div className="row">
          {machineTypes.map((type) => (
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
                <div className="card-body d-flex flex-column p-4 text-muted" style={{ backgroundColor: '#ffffff' }}>
                <h5
    className="card-title font-weight-bold mb-3"
    style={{
      WebkitBackgroundClip: 'text',
      fontWeight: 'bold', // Ensures the text is bold
    }}
  > 
    {type.name}
  </h5>

                  <p className="card-text text-muted mb-4">{type.description}</p>

                  <div className="mt-auto">
                  <h3
    className="mt-1 p-2 rounded fw-bold mb-3"
    style={{
      fontSize: '1rem',
      background: 'linear-gradient(45deg, #343a40, #495057)', // Gradient background
      color: '#ffffff' // Text color for better contrast
    }}
  >
    Specifications
  </h3>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2"><strong>Capacity:</strong> {type.specifications.capacity}</li>
                      <li className="mb-2"><strong>Price:</strong> {type.price}</li>
                      <li className="mb-2"><strong>Wash Time:</strong> {type.specifications.washTime}</li>
                      <li className="mb-2"><strong>Shirts:</strong> {type.specifications.shirts}</li>
                      <li className="mb-2"><strong>Pants:</strong> {type.specifications.pants}</li>
                      <li className="mb-2"><strong>Sarees:</strong> {type.specifications.sarees}</li>
                      <li className="mb-2"><strong>Bedsheets:</strong> {type.specifications.bedsheets}</li>
                      <li className="mb-2"><strong>Pillow Covers:</strong> {type.specifications.pillowCovers || 'None'}</li>
                      <li className="mb-2"><strong>Motor:</strong> {type.specifications.motor}</li>
                      <li className="mb-2"><strong>Power:</strong> {type.specifications.power}</li>
                      <li className="mb-2"><strong>Weight:</strong> {type.specifications.weight}</li>
                      <li className="mb-2"><strong>Height:</strong> {type.specifications.dimensions.height}</li>
                      <li className="mb-2"><strong>Width:</strong> {type.specifications.dimensions.width}</li>
                      <li><strong>Warranty:</strong> {type.specifications.warranty}</li>
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

export default WashingMachineTypes;
