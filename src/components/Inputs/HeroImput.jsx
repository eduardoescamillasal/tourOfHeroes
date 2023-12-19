
import React from "react";
import "./HeroInput.css"; 

const HeroInput = ({value, onChange, placeholder, type = "text"}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='hero-input'
    />
  );
};

export default HeroInput;
