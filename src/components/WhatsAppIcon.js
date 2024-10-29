import React from 'react';

const WhatsAppIcon = () => {
  const handleClick = () => {
    const message = "Hi, I would like to inquire about your products.";
    const whatsappUrl = `https://wa.me/8122886743?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      onClick={handleClick} 
      style={{
        position: "fixed", 
        bottom: "20px", 
        right: "20px", 
        cursor: "pointer", 
        zIndex: 9999
      }}
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        style={{ width: "50px", height: "50px" }} 
      />
    </div>
  );
};

export default WhatsAppIcon;
