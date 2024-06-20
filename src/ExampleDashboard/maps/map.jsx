import React from 'react';
import './map.css'

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="Chennai Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.864358621726!2d80.26334381479715!3d13.082680990785926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266a9b70d5f7f%3A0x3f3bb062f60bf06d!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2s!4v1623420430330!5m2!1sen!2s"
        width="450"
        height="270"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
