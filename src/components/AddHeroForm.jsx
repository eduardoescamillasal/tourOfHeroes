import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addHero} from "../actions/heroActions";
import './AddHeroForm.css';
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
    const heroId = generateNewId();
    dispatch(addHero({...newHero, id: heroId}));
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
           <input id='heroName' type='text' value={newHero.name} onChange={handleChange} required />
           <button type='submit'>Add Hero</button>
           <button type='button' onClick={handleFormClose}>
             Close
           </button>
         </form>
       </div>
     </>
   );
};

export default AddHeroForm;
