import axios from "axios"
import { API_BASE_URL } from "../apiConfig";

export const ADD_HERO = "ADD_HERO";
export const EDIT_HERO = "EDIT_HERO";
export const DELETE_HERO = "DELETE_HERO";
export const MARK_AS_FAVORITE = "MARK_AS_FAVORITE";
export const INCREMENT_FAVORITE_COUNT = "INCREMENT_FAVORITE_COUNT";
// export const addHero = (hero) => {
//   return {
//     type: ADD_HERO,
//     payload: hero,
//   };
// };
export const addHero = (hero) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/addNewHero`, hero);
    dispatch({
      type: ADD_HERO,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error adding new hero:", error);
    // handle the error accordingly
  }
};

export const editHero = (hero) => {
  return {
    type: EDIT_HERO,
    payload: hero,
  };
};

export const deleteHero = (heroId) => {
  return {
    type: DELETE_HERO,
    payload: heroId,
  };
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
