import React from 'react';

const Carousel = props =>
(
  <div className="container-fluid">
    <div id="myCarousel" className="carousel slide bg-inverse w-50 ml-auto mr-auto" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img className="d-block w-100 imageSize" src="/images/house-of-card-democracy-is-overrted.jpeg" alt="First slide" />
          <div className="carousel-caption">
            <h3>First slide</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 imageSize" src="/images/good_wife.jpg" alt="Second slide" />
          <div className="carousel-caption">
            <h3>Second slide</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 imageSize" src="/images/theCrown.jpg" alt="Third slide" />
          <div className="carousel-caption">
            <h3>Third slide</h3>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
  
)

export default Carousel;