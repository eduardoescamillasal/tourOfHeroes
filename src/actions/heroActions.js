import axios from "axios";
import {API_BASE_URL} from "../apiConfig";

export const ADD_HERO = "ADD_HERO";
export const EDIT_HERO = "EDIT_HERO";
export const DELETE_HERO = "DELETE_HERO";
export const MARK_AS_FAVORITE = "MARK_AS_FAVORITE";
export const INCREMENT_FAVORITE_COUNT = "INCREMENT_FAVORITE_COUNT";
export const SET_INITIAL_HEROES = "SET_INITIAL_HEROES";

export const setInitialHeroes = (heroes) => {
  return {
    type: SET_INITIAL_HEROES,
    payload: heroes,
  };
};

export const addHero = (hero) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/addNewHero`, hero);
    dispatch({
      type: ADD_HERO,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error adding new hero:", error);
  }
};

export const editHero = (hero) => async (dispatch) => {
  try {
    await axios.put(`${API_BASE_URL}/updateHeroes/${hero.id}`, hero);
    dispatch({
      type: EDIT_HERO,
      payload: hero,
    });
  } catch (error) {
    console.error("Error editing hero:", error);
  }
};

export const deleteHero = (heroId) => async (dispatch) => {
  try {
    await axios.delete(`${API_BASE_URL}/deleteHero/${heroId}`);
    dispatch({
      type: DELETE_HERO,
      payload: heroId,
    });
  } catch (error) {
    console.error("Error deleting hero:", error);
  }
};

export const markAsFavorite = (heroId) => {
  return {
    type: MARK_AS_FAVORITE,
    payload: heroId,
  };
};

export const incrementFavoriteCount = (heroId) => {
  return {
    type: INCREMENT_FAVORITE_COUNT,
    payload: heroId,
  };
};

export const FETCH_HERO_SUCCESS = "FETCH_HERO_SUCCESS";

// Fetch Hero action
export const fetchHero = (heroId) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getHero/${heroId}`);
    dispatch({
      type: FETCH_HERO_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching hero:", error);
    // You might want to dispatch a failure action or handle the error here
  }
};