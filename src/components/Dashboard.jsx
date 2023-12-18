import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import AddHeroForm from "./AddHeroForm";
import "./Dashboard.css";

const Dashboard = ({heroes}) => {
  const sortedHeroes = [...heroes].sort((a, b) => a.favId - b.favId);
  if (!Array.isArray(heroes) || heroes.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className='dashboard'>
      <h3>Top Heroes</h3>
      <div className='grid grid-pad'>
        {sortedHeroes.map((hero) => (
          <Link to={`/detail/${hero.id}`} className='col-1-4' key={hero.id}>
            <div className='module hero'>
              <h4>{hero.name}</h4>
            </div>
          </Link>
        ))}
      </div>
      <AddHeroForm />
    </div>
  );
};

const mapStateToProps = (state) => ({
  heroes: state.hero.heroes,
});

export default connect(mapStateToProps)(Dashboard);
