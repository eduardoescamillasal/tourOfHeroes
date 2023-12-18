import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HeroList from "./components/HeroList";
import HeroDetail from "./components/HeroDetail";
import HeroDetailWrapper from "./components/HeroDetailWrapper";
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
          <Route path='/detail/:id' element={<HeroDetailWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
