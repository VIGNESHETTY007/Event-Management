import React from "react";
import "../styles/Gallery.css";

function Gallery() {
  return (
    <div className="gallery-container">
      <h1>Event Gallery</h1>
      <div className="gallery-grid">
        <img src="/images/event1.jpg" alt="Event 1" />
        <img src="/images/event2.jpg" alt="Event 2" />
        <img src="/images/event3.jpg" alt="Event 3" />
      </div>
    </div>
  );
}

export default Gallery;