import React from 'react';

const VideosPage = () => {
  const videoUrls = [
    "https://www.youtube.com/embed/09IwIGiEQDY",
    "https://www.youtube.com/embed/wmX5HI7rZOU",
    "https://www.youtube.com/embed/XaeXIPixLss",
    "https://www.youtube.com/embed/Wjxi9IXPtX4?start=50",
    "https://www.youtube.com/embed/9XFr33KKXZ8",
    "https://www.youtube.com/embed/Kvqp4NdOqtA",
    "https://www.youtube.com/embed/ecS1QNne9w4",
    "https://www.youtube.com/embed/PaKYGdHAE0o",
    "https://www.youtube.com/embed/2P2iJs4trpw"
  ];
  

  return (
    <div className="container p-0 mt-4">
      <h1
        className="text-center mb-4"
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "#2980b9",
        }}
      >
        Product Videos
      </h1>
      <p
        className="text-center mb-5"
        style={{
          fontSize: "1.1rem",
          color: "#7f8c8d",
          lineHeight: "1.6",
        }}
      >
        Watch our product videos to learn more about how they work, their features, and how they can make your life easier.
      </p>
      <div className="row g-3">
        {videoUrls.map((url, index) => (
          <div
            className="col-12 col-md-6 col-lg-4 mb-4"
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="embed-responsive embed-responsive-16by9 rounded overflow-hidden"
              style={{
                width: "100%",
                maxWidth: "380px",
                
              }}
            >
              <iframe
                className="embed-responsive-item"
                src={url}
                title={`Product Video ${index + 1}`}
                allowFullScreen
                style={{
                  width: "100%",
                  height: "auto",
                  border: "none",
                }}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
