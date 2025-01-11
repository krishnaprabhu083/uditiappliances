import React from 'react';
import whashingImg4 from '../Assets/homeProductImg.png';
import logo from "../Assets/logo2.png"
import logoU from "../Assets/logoU.png"
import OurProducts from './OurProducts'
import Contact from './Contact';
import VideosPage from './VideosPage';
import ReactTypingEffect from 'react-typing-effect';  

const Home = () => {
 
  return (
    <div
    className="container-fluid text-center p-lg-2 p-0"
    style={{
      background: "linear-gradient(180deg, #f8f9fa, #e9ecef)",
      borderRadius: "0.5rem",
    }}
  >
   <div
  className="container-fluid text-center p-lg-2 p-0 position-relative"
  style={{
    background: "linear-gradient(180deg, #f8f9fa, #e9ecef)",
    borderRadius: "0.5rem",
    overflow: "hidden",
  }}
>
<div className="welcome-section container rounded">
  {/* Decorative Curved Ribbon */}
  <div
    className="position-absolute"
    style={{
      top: "-50px",
      right: "-50px",
      background: "linear-gradient(45deg, #3498db, #8e44ad)",
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      transform: "rotate(-45deg)",
      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
      zIndex: 1,
      animation: "float 8s ease-in-out infinite",
    }}
  ></div>

  {/* Floating Decorative Circles */}
  <div
    className="position-absolute"
    style={{
      top: "40px",
      left: "30px",
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      background: "rgba(52, 152, 219, 0.4)",
      animation: "float 6s ease-in-out infinite alternate",
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
      zIndex: 1,
    }}
  ></div>
  <div
    className="position-absolute d-md-block"
    style={{
      bottom: "20px",
      right: "20px",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: "rgba(142, 68, 173, 0.3)",
      animation: "float 7s infinite alternate-reverse",
      zIndex: 1,
    }}
  ></div>
  <div
    className="position-absolute d-none d-md-block  "
    style={{
      top: "120px",
      right: "120px",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: "rgba(46, 204, 113, 0.3)",
      animation: "float-diagonal 9s ease-in-out infinite",
      zIndex: 1,
    }}
  ></div>

  <div className="row justify-content-center text-center position-relative" style={{ zIndex: 2 }}>
    <div className="col-lg-9 col-md-10 col-12 my-lg-3 my-4">
      {/* Logo, Title, and Washing Machine Image */}
      <img
        src={logo}
        alt="Uditi Appliances Logo"
        style={{
          width: "95px",
          height: "90px",
          marginBottom: "0rem",
          maxWidth: "100%", // Responsive image
        }}
      />
      <h4
        className="fw-bold mb-0 responsive-title my-2"
        style={{
          fontSize: "2.2rem",
          position: "relative",
        }}
      >
        <span className="fw-bold" style={{ fontSize: "inherit" }}>
          <img
            src={logoU}
            alt="Uditi Logo"
            style={{
              width: "35px",
              marginBottom: "28px",
              maxWidth: "100%", // Responsive image
            }}
          />
        </span>
        <span className="mt-2">diti Appliances</span>
        <p
  className="home-description mb-0 responsive-description"
  style={{
    color: "#2980b9",
    fontStyle: "italic",
    letterSpacing: "0.03rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Adds a 3D effect
    fontWeight: "bod", // Makes the 3D effect more prominent
    fontSize:"17px"
  }}
>
<ReactTypingEffect
        text={["Smart Appliances, Smart Life..."]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={4000}
        typingDelay={500}
      />
  
</p>

      </h4>
      <img
        src={whashingImg4}
        alt="Washing Machine"
        className="img-fluid mt-4 homeproductimg"
        style={{
          width: "100%",
          maxWidth: "70%",
          borderRadius: "1rem",
          height: "auto", // Maintain aspect ratio
        }}
      />
    </div>
  </div>

  {/* Floating Shapes Animation */}
  <style>
    {`
      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
      }

      @keyframes float-diagonal {
        0%, 100% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(-15px, -15px);
        }
      }
    `}
  </style>
</div>


 
</div>
  
   {/* OurProducts Section */}
   <div className="products-container mt-lg-0 mt-3 p-0"  >
      <OurProducts />
    </div>

  {/* Features Section */}
  <div className="container my-md-5 my-2">
      <h3 className="text-center mb-5 text-d" style={{ color: "#2980b9" }}>
        <ReactTypingEffect
        text={["Why Choose Uditi Appliances?"]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={2000}
        typingDelay={500}
      />
      </h3>
      <div className="row">
        <div className="col-md-4 text-center">
          <i className="fas fa-bolt fa-3x text-primary mb-3 text-3d"></i>
          <h5 className="text-3 text-3d">Energy Efficient</h5>
          <p className='text-3'>Save power without compromising on performance.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="fas fa-tools fa-3x text-primary mb-3 text-3d"></i>
          <h5 className="text-3 text-3d">Durable Design</h5>
          <p className='text-3'>Built to last with top-quality materials.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="fas fa-sync-alt fa-3x text-primary mb-3 text-3d"></i>
          <h5 className="text-d text-3d">Advanced Technology</h5>
          <p className='text-d'>Experience the latest in washing machine innovation.</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container my-5">
      <h3 className="text-center mb-4" style={{ color: "#8e44ad" }}>
      What Our Customers Say
      
    </h3>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p className="text-center fst-italic">
                "Absolutely love my Uditi washing machine! It’s efficient and quiet."
              </p>
              <p className="text-center text-muted">- Priya K.</p>
            </div>
            <div className="carousel-item">
              <p className="text-center fst-italic ">
                "The best investment for my home. Highly recommended!"
              </p>
              <p className="text-center text-muted">- Rahul M.</p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>

    <div  className='container-fluid '>
      <VideosPage/>
    </div>
    <div  className='container-fluid p-0'>
      <Contact/>
    </div>
  </div>
  
  );
};

export default Home;
