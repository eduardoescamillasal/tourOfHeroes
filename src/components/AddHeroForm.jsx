import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addHero} from "../actions/heroActions";

const AddHeroForm = () => {
  const [newHero, setNewHero] = useState({name: ""});
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.hero.heroes); // Get current heroes from Redux

  const generateNewId = () => {
    const maxId = heroes.reduce((max, hero) => Math.max(hero.id, max), 0);
    return maxId + 1;
  };

  const handleChange = (e) => {
    setNewHero({...newHero, name: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const heroId = generateNewId();
    dispatch(addHero({...newHero, id: heroId}));
    setNewHero({name: ""}); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='heroName'>Hero Name:</label>
      <input id='heroName' type='text' value={newHero.name} onChange={handleChange} required />
      <button type='submit'>Add Hero</button>
    </form>
  );
};

export default AddHeroForm;
