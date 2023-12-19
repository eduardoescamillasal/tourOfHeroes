import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <div style={{marginTop: 10, display: "flex", justifyContent: "start"}}>
      <nav>
        <Link style={{color: "black"}} to='/'>Dashboard</Link>  <Link to='/heroes'>Heroes</Link>
      </nav>
    </div>
  );
};

export default Navigation;
