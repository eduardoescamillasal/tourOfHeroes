import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';
import { deleteHero, editHero } from "../actions/heroActions";


const HeroDetail = ( {id, hero, deleteHero, editHero} ) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [heroDetails, setHeroDetails] = useState(hero || {id: null, name: "Unknown"});

  const handleDelete = () => {
    dispatch( deleteHero( parseInt( id ) ) )
    navigate('/heroes')
  }

  const handleChange = (e) => {
    setHeroDetails({...heroDetails, name: e.target.value});
  };

   const handleSave = () => {
     editHero(heroDetails);
     navigate("/heroes");
   };

  return (
    <div>
      <h2>{hero.name} Details</h2>
      <div>
        <label>ID: </label>
        {hero.id}
      </div>
      <div>
        <label>Name: </label>
        <input type='text' value={hero.name} onChange={handleChange} />
      </div>

      <button onClick={handleDelete}>Delete Hero</button>
      <button onClick={handleSave}>Save Hero</button>
    </div>
  );
};


const mapStateToProps = (state, ownProps) => {
  const heroId = parseInt(ownProps.id || ownProps.match.params.id);
  return {
    hero: state.hero.heroes.find((hero) => hero.id === heroId),
  };
};


const mapDispatchToProps = {
  deleteHero,
  editHero
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail);

