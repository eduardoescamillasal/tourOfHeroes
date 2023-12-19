import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HeroList from "./components/HeroList";
import HeroDetailWrapper from "./components/HeroDetailWrapper";
import NotFound from "./components/NotFound";
import HeroButton from "./components/Buttons/HeroButton";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div>
        <HeroButton onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </HeroButton>
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
