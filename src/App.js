import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HeroList from "./components/HeroList";
import HeroDetailWrapper from "./components/HeroDetailWrapper";
import NotFound from "./components/NotFound";
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/heroes' element={<HeroList />} />
          <Route path='/detail/:id' element={<HeroDetailWrapper />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
