import React from 'react';
import mixyImg from "../../Assets/Mixy/mixyImg.png";
import blenderImg2 from "../../Assets/Mixy/mixy15.png";
import blenderImg from "../../Assets/Mixy/blenderImg.jpeg";

const MixyTypes = () => {

  const mixyModels = [
    {
        images: [mixyImg],
        id: 101,
        name: 'Mixer Grinder',
        price: '₹4,000',
        brand: 'UDITI',
        model: 'Mixer',
        delivery: 'Free home delivery',
        color: 'Orange with Black',
        jars: '3 pcs steel jars, 1 juicer jar',
        warranty: '2 years on product and 5 years on motor',
        specialFeature: 'Compact',
        material: 'Copper',
        includedComponents: 'User Manual, Blades, Jars, Mixer Grinder',
        recommendedUses: 'Juices, Grinding',
        powerSource: 'Corded Electric',
        wattage: '650 watts',
        voltage: '230 Volts',
        isDishwasherSafe: 'Yes',
        bladeMaterial: 'Stainless Steel',
    },
    {
        images: [blenderImg,blenderImg2],
        id: 102,
        name: 'Blender',
        price: '₹3000',
        brand: 'UDITI',
        model: 'Blender',
        mrp: '3500',
        delivery: 'Free home delivery',
        color: 'White and Black',
        jars: '4 pcs glass jars, two blades, two sippers',
        warranty: '2 years on product and 5 years on motor',
        specialFeature: 'Compact',
        productDimensions: '14D x 14W x 30H Centimeters',
        material: 'Copper',
        includedComponents: 'User Manual, Blades, Jars, Mixer Grinder',
        style: 'Countertop Blender',
        recommendedUses: 'Blending, Juices, Grinding',
        powerSource: 'Corded Electric',
        wattage: '500 Watts',
        voltage: '230 Volts',
        isDishwasherSafe: 'Yes',
        bladeMaterial: 'Stainless Steel',
        countryOfOrigin: 'India',
        itemModelNumber: 'Push'
    }
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
         Explore Our Mixer
       
      </h2>
      <div className="row justify-content-center">
      {mixyModels.map((product) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={product.id}>
                        <div className="card shadow-lg h-100 border-0 rounded-lg">
                            {/* Image Carousel */}
                            <div id={`carousel-${product.id}`} className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {product.images.map((img, idx) => (
                                        <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                                            <img src={img} className="d-block w-100" style={{
                          height: '250px',
                          objectFit: 'contain',
                        }} alt={`${product.name}`} />
                                        </div>
                                    ))}
                                </div>
                                {/* Carousel Controls */}
                                <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${product.id}`} data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${product.id}`} data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>

                            {/* Product Details */}
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{product.name}</h5>
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
                                <p><strong>Price:</strong> {product.price}</p>
                                <p><strong>Brand:</strong> {product.brand}</p>
                                <p><strong>Model:</strong> {product.model}</p>
                                {product.mrp && <p><strong>MRP:</strong> ₹{product.mrp}</p>}
                                <p><strong>Delivery:</strong> {product.delivery}</p>
                                <p><strong>Color:</strong> {product.color}</p>
                                <p><strong>Jars:</strong> {product.jars}</p>
                                <p><strong>Warranty:</strong> {product.warranty}</p>
                                <p><strong>Special Feature:</strong> {product.specialFeature}</p>
                                {product.productDimensions && <p><strong>Dimensions:</strong> {product.productDimensions}</p>}
                                <p><strong>Material:</strong> {product.material}</p>
                                <p><strong>Included Components:</strong> {product.includedComponents}</p>
                                {product.style && <p><strong>Style:</strong> {product.style}</p>}
                                <p><strong>Recommended Uses:</strong> {product.recommendedUses}</p>
                                <p><strong>Power Source:</strong> {product.powerSource}</p>
                                <p><strong>Wattage:</strong> {product.wattage}</p>
                                <p><strong>Voltage:</strong> {product.voltage}</p>
                                <p><strong>Is Dishwasher Safe:</strong> {product.isDishwasherSafe}</p>
                                <p><strong>Blade Material:</strong> {product.bladeMaterial}</p>
                                {product.countryOfOrigin && <p><strong>Country of Origin:</strong> {product.countryOfOrigin}</p>}
                                {product.itemModelNumber && <p><strong>Item Model Number:</strong> {product.itemModelNumber}</p>}

                                {/* Buy Now Button */}
                                <button 
    className="btn btn-success w-100 mt-3"
    style={{ borderRadius: '1rem' }}
    onClick={() => handleCardClick(product)}
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

export default MixyTypes;
