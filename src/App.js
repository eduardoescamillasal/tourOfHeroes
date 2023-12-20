import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HeroList from "./components/HeroList";
import HeroDetailWrapper from "./components/HeroDetailWrapper";
import NotFound from "./components/NotFound";
import HeroButton from "./components/Buttons/HeroButton";
import "./App.css";
import DonutAnimation from "./components/DonutAnimation";
import axios from "axios";
import {API_BASE_URL} from "./apiConfig";
import {setInitialHeroes} from "./actions/heroActions";
import {useDispatch} from "react-redux";

const App = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    fetchData();
  }, [dispatch]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/listHeroes`);
      dispatch(setInitialHeroes(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className='main-content'>
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
