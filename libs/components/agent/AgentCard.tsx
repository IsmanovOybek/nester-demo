import React from "react";

const CarCard = () => {
  return (
    <div className="car-card">
      {/* === IMAGE & BADGES === */}
      <div className="car-image">
        <img src="/img/banner/1.webp" alt="BMW" />

        <div className="badges">
          <span className="featured">Featured</span>
          <span className="images">
            <i className="ri-image-line"></i> 6
          </span>
          <span className="year">2024</span>
        </div>

        <div className="overlay-buttons">
          <button className="circle-btn swap">
            <i className="ri-swap-line"></i>
          </button>
          <button className="circle-btn heart">
            <i className="ri-heart-line"></i>
          </button>
        </div>
      </div>

      {/* === CONTENT === */}
      <div className="car-content">
        <p className="type">Sedan</p>
        <h3 className="title">2017 BMW X1 xDrive 20d xline</h3>

        <div className="info">
          <span>
            <i className="ri-roadster-line"></i> 72,491 kms
          </span>
          <span>
            <i className="ri-gas-station-line"></i> Diesel
          </span>
          <span>
            <i className="ri-settings-5-line"></i> Automatic
          </span>
        </div>

        <p className="price">$73,000</p>

        <div className="divider" />

        <div className="footer">
          <div className="user">
            <img src="/img/profile/girl.svg" alt="user" />
            <span>Kathryn Murphy</span>
          </div>
          <button className="view-btn">View car</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
