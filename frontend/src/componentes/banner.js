/*import React from 'react';

import banner1 from './assets/imagen/banner1.jpg';
import banner2 from './assets/imagen/banner2.jpg';
import banner3 from './assets/imagen/banner3.jpg';

 
function Banner () {
    return (
    <div>
      <div id='banner-img'>
              <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="6000">
                  <img id='imagen-banner' src={banner1} className="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                  <img id='imagen-banner' src={banner2} className="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                  <img id='imagen-banner' src={banner3} className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
        </div>
      </div>
   )
}

export default Banner
*/

import React from 'react';
import banner1 from './assets/imagen/banner1.jpg';
import banner2 from './assets/imagen/banner2.jpg';
import banner3 from './assets/imagen/banner3.jpg';
import './style/Banner.css';

function Banner() {
  return (
    <div className="banner-container">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="6000">
            <img src={banner1} className="d-block w-100 carousel-img" alt="Banner 1" />
          </div>
          <div className="carousel-item" data-bs-interval="6000">
            <img src={banner2} className="d-block w-100 carousel-img" alt="Banner 2" />
          </div>
          <div className="carousel-item" data-bs-interval="6000">
            <img src={banner3} className="d-block w-100 carousel-img" alt="Banner 3" />
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

