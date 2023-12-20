import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import HeroButton from "./Buttons/HeroButton";
import HeroInput from "./Inputs/HeroImput";
import {addHero} from "../actions/heroActions";
import "./AddHeroForm.css";
import { v4 as uuidv4 } from "uuid";
const AddHeroForm = ({onClose}) => {
  const [newHero, setNewHero] = useState({name: ""});
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.hero.heroes);

  const generateNewId = () => {
    const maxId = heroes.reduce((max, hero) => Math.max(hero.id, max), 0);
    return maxId + 1;
  };

  const handleChange = (e) => {
    setNewHero({...newHero, name: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const heroId = uuidv4(); 
    dispatch(addHero({...newHero, id: heroId, favoriteCount: 0}));
    setNewHero({name: ""});
  };


  const handleFormClose = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      <div className='modal-backdrop' onClick={onClose}></div>
      <div className='modal'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='heroName'>Hero Name:</label>
          <HeroInput
            id='heroName'
            type='text'
            value={newHero.name}
            onChange={handleChange}
            required
          />
          <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <HeroButton type='submit'>Add Hero</HeroButton>
            <HeroButton type='button' onClick={handleFormClose}>
              Close
            </HeroButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddHeroForm;
