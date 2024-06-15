import React, { useState, useEffect } from 'react';
import '../CSS/carousel_main.css'; // CSS 파일 import

// 이미지 리스트
const images = ['pub_img/main_car_1.jpg', 'pub_img/main_car_2.jpg'];


const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {

    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="shape-container">
      <button className="arrow left" onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}></button>
      <img src={images[currentImageIndex]} alt="" />
      <button className="arrow right" onClick={nextImage}></button>
    </div>
    </div>
  );
};

export default Carousel;
