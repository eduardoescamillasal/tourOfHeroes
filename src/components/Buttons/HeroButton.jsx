import React from "react";
import "./HeroButton.css"; 

const HeroButton = ({onClick, children}) => {
  return (
    <div>
      <button className='hero-button' onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default HeroButton;
