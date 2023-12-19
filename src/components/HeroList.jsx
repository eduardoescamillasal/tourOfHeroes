import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {useDispatch} from "react-redux";
import { incrementFavoriteCount } from "../actions/heroActions";
import Navigation from "./Navigation";
import "./HeroList.css";

const HeroList = ({heroes}) => {
  const dispatch = useDispatch();

  const handleFavorite = (heroId) => {
    dispatch(incrementFavoriteCount(heroId));
  };
  const sortedHeroes = [...heroes].sort((a, b) => (b.favoriteCount || 0) - (a.favoriteCount || 0));

  return (
    <div>
      <Navigation />
      <h2>Heroes</h2>
      <ul className='hero-list'>
        {sortedHeroes.map((hero) => (
          <li key={hero.id} className='hero-item'>
            <Link to={`/detail/${hero.id}`} className='hero-link'>
              <span className='badge'>{hero.id}</span>
              <span className='hero-name'>{hero.name}</span>
            </Link>
            <button className='favorite-button' onClick={() => handleFavorite(hero.id)}>
              Favorite
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {heroes: state.hero.heroes};
};

export default connect(mapStateToProps)(HeroList);
