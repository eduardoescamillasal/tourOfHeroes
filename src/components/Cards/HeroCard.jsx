import React from "react";
import "./HeroCard.css";
const HeroCard = ({hero}) => {
  return (
    <div className='module hero hero-card'>
      <h4>{hero.name}</h4>
    </div>
  );
};

export default HeroCard