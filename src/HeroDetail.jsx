import React, {useState} from "react";
import { useParams } from "react-router-dom";

const HeroDetail = (props) => {
  const { id, favId } = useParams();
  const [hero, setHero] = useState({id: id, name: "Unknown", favId: favId});

  const handleChange = (e) => {
    setHero({...hero, name: e.target.value});
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
      {/* Save and Cancel buttons */}
    </div>
  );
};

export default HeroDetail;
