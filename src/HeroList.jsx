import React from "react";
import {Link} from "react-router-dom";
import './HeroList.css';
const heroes = [
  {id: 1, name: "Spider-Man", favId: 1},
  {id: 2, name: "Iron Man", favId: 2},
  { id: 3, name: "Narco", favId: 3 },
  { id: 4, name: "Magneta", favId: 15 },
  {id: 5, name:"RubberMan", favId: 14},

];

const HeroList = () => {
  return (
    <div>
      <h2>Heroes</h2>
      <ul className='hero-list'>
        {heroes.map((hero) => (
          <li key={hero.id}>
            <Link to={`/detail/${hero.id}`} className="hero-link">
              <span className='badge'>{hero.id}</span>
              <span className='hero-name'>{hero.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroList;
