import React from "react";
import desktopImage from '../assets/desktopImage.jpg';
import mobileImage from '../assets/desktopImage.jpg';

const Home = () => {
  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  return (
      <div className="backGround" style={{backgroundImage: `url(${imageUrl})` }}>
      
      </div>
  );
};
export default Home;
