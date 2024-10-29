import React from 'react';

const VideosPage = () => {
  // Replace these with your own YouTube video URLs or IDs
  const videoUrls = [
    "https://www.youtube.com/embed/09IwIGiEQDY",
    "https://www.youtube.com/embed/wmX5HI7rZOU",
    "https://www.youtube.com/embed/XaeXIPixLss",
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Videos</h1>
      <div className="row">
        {videoUrls.map((url, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={url}
                title={`Product Video ${index + 1}`}
                allowFullScreen
                style={{ width: "100%", height: "250px", border: "none" }}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
