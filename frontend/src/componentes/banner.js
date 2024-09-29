import React from 'react';
import banner1 from './assets/imagen/fut.jpg';
import banner2 from './assets/imagen/bal3.jpg';
import banner3 from './assets/imagen/vol2.png';
import banner4 from './assets/imagen/aj.jpg';
import './style/Banner.css';

function Banner() {
  return (
    <div className="banner-container">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={banner1} className="d-block w-100 carousel-img" alt="Banner 1" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={banner2} className="d-block w-100 carousel-img" alt="Banner 2" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={banner3} className="d-block w-100 carousel-img" alt="Banner 3" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={banner4} className="d-block w-100 carousel-img" alt="Banner 4" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
