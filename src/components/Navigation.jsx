import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <h1 style={{fontSize: 35, fontWeight: 700, color: "#3c1518"}}>Tour of Heroes</h1>
      <div style={{marginTop: 10, display: "flex", justifyContent: "start"}}>
        <nav>
          <Link to='/'>Dashboard</Link> <Link to='/heroes'>Heroes</Link>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
