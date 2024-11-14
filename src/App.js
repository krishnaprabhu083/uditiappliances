import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import OurProducts from './components/OurProducts';
import WashingMachineTypes from './components/WashingMachine/WashingMachineTypes';
import MachineDetailPage from './components/WashingMachine/MachineDetailPage';
import InstantWaterHeaterTypes from './components/WaterHeater/InstantWaterHeaterTypes';
import WaterHeaterSpecificationPage from './components/WaterHeater/WaterHeaterSpecificationPage';
import GrinderTypes from './components/Grinder/GrinderTypes';
import PumpTypes from './components/Pump/PumpTypes';
import VideosPage from './components/VideosPage';
import ScrollToTop from './components/ScrollToTop'
import WhatsAppIcon from './components/WhatsAppIcon'; // Import the WhatsAppIcon component
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import './App.css'; 

const App = () => {
  return (
    <Router>
     <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourProducts" element={<OurProducts />} />
          <Route path="/WashingMachine" element={<WashingMachineTypes />} />
          <Route path="/machine/:id" element={<MachineDetailPage />} />
          <Route path="/WaterHeater" element={<InstantWaterHeaterTypes />} />
          <Route path="/water-heater/specifications/:modelId" element={<WaterHeaterSpecificationPage />} />
          <Route path="/Grinder" element={<GrinderTypes />} />
          <Route path="/Pump" element={<PumpTypes />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          
        </Routes>
      </main>
      <WhatsAppIcon />
      <Footer />
    </Router>
  );
};

export default App;
