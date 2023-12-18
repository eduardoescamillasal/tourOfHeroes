import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import "./HeroList.css";

const HeroList = ( { heroes } ) => {
  return (
    <div>
      <h2>Heroes</h2>
      <ul className='hero-list'>
        {heroes.map((hero) => (
          <li key={hero.id}>
            <Link to={`/detail/${hero.id}`} className='hero-link'>
              <span className='badge'>{hero.id}</span>
              <span className='hero-name'>{hero.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state); // Log the state to debug
  return {heroes: state.hero.heroes};
};


export default connect(mapStateToProps)(HeroList);
