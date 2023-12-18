import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Dashboard from "./Dashboard";
import HeroList from "./HeroList";
import HeroDetail from "./HeroDetail";
import './App.css'
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Dashboard</Link> | <Link to='/heroes'>Heroes</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/heroes' element={<HeroList />} />
          <Route path='/detail/:id' element={<HeroDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
