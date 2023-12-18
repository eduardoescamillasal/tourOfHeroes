import React from "react";
import {Link} from "react-router-dom";
import "./Dashboard.css"; // Make sure to import the CSS file

const heroes = [
  {id: 1, name: "Spider-Man", favId: 1},
  {id: 2, name: "Iron Man", favId: 2},
  {id: 3, name: "Narco", favId: 3},
  {id: 4, name: "Magneta", favId: 15},
  {id: 5, name: "RubberMan", favId: 14},
];

const sortedHeroes = heroes.sort( ( a, b ) => a.favId - b.favId );
function Dashboard() {
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
    </div>
  );
}

export default Dashboard;
