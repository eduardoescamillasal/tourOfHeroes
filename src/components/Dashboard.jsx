import React,{useState} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import AddHeroForm from "./AddHeroForm";
import HeroButton from "./Buttons/HeroButton";
import HeroCard from "./Cards/HeroCard";
import Navigation from "./Navigation";
import "./Dashboard.css";
import { API_BASE_URL } from "../apiConfig";
import axios from "axios";
const Dashboard = ( { heroes } ) => {
  const [ isModalOpen, setIsModalOpen ] = useState( false );

const addNewHero = async (heroData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/addNewHero`,
      heroData
    );
    console.log(response.data); 
  } catch (error) {
    console.error("Error adding new hero:", error);
  }
};
addNewHero({"id":"1", "name": "a", "favoriteCount": 2})
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const sortedHeroes = [...heroes].sort((a, b) => a.favId - b.favId);
  if (!Array.isArray(heroes) || heroes.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className='dashboard'>
      <Navigation />
      <h3 className='top-heroes'>Top Heroes</h3>
      <div className='grid grid-pad'>
        {sortedHeroes.map((hero) => (
          <Link to={`/detail/${hero.id}`} className='col-1-4' key={hero.id}>
            <HeroCard hero={hero} />
          </Link>
        ))}
      </div>
      <HeroButton onClick={toggleModal}>Add New Hero</HeroButton>
      {isModalOpen && <AddHeroForm onClose={toggleModal} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  heroes: state.hero.heroes,
});

export default connect(mapStateToProps)(Dashboard);
