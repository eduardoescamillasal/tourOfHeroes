import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {deleteHero, editHero, incrementFavoriteCount, fetchHero} from "../actions/heroActions";
import './HeroDetail.css';

const HeroDetail = ( { hero, deleteHero, editHero, incrementFavoriteCount, fetchHero } ) => {
    const {id} = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [heroDetails, setHeroDetails] = useState(hero || {id: null, name: "Unknown"});

  const handleFavorite = () => {
    incrementFavoriteCount(hero.id);
  };

 useEffect(() => {
   if (!hero) {
     dispatch(fetchHero(id));
   } else {
     setHeroDetails(hero);
   }
 }, [id, hero, dispatch]);


  const handleDelete = () => {
    dispatch(deleteHero(heroDetails.id));
    navigate("/heroes");
  };

  const handleChange = (e) => {
    setHeroDetails({...heroDetails, name: e.target.value});
  };

  const handleSave = () => {
    dispatch(editHero(heroDetails));
    navigate("/heroes");
  };

  return (
    <div className='hero-detail'>
      <h2>{heroDetails.name} Details</h2>
      <div>
        <label>ID: </label>
        {heroDetails.id}
      </div>
      <div>
        <label>Name: </label>
        <input type='text' value={heroDetails.name} onChange={handleChange} />
      </div>
      <button className='button-hero' onClick={handleDelete}>
        Delete Hero
      </button>
      <button className='button-hero' onClick={handleSave}>
        Save Hero
      </button>
      <button className='button-hero' onClick={handleFavorite}>
        Favorite
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const heroId = ownProps.id || ownProps.match.params.id;
  return {
    hero: state.hero.heroes.find((hero) => hero.id === heroId),
  };
};


const mapDispatchToProps = {
  deleteHero,
  editHero,
  incrementFavoriteCount,
  fetchHero,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail);
