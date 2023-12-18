import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {deleteHero, editHero} from "../actions/heroActions";

const HeroDetail = ({hero, deleteHero, editHero}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [heroDetails, setHeroDetails] = useState(hero || {id: null, name: "Unknown"});

  useEffect(() => {
    if (hero) {
      setHeroDetails(hero);
    }
  }, [hero]);

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
    <div>
      <h2>{heroDetails.name} Details</h2>
      <div>
        <label>ID: </label>
        {heroDetails.id}
      </div>
      <div>
        <label>Name: </label>
        <input type='text' value={heroDetails.name} onChange={handleChange} />
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
  editHero,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail);
