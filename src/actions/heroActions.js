// actions.js

// Action Types
export const ADD_HERO = "ADD_HERO";
export const EDIT_HERO = "EDIT_HERO";
export const DELETE_HERO = "DELETE_HERO";

// Action Creators
export const addHero = (hero) => {
  return {
    type: ADD_HERO,
    payload: hero,
  };
};

export const editHero = (hero) => {
  return {
    type: EDIT_HERO,
    payload: hero,
  };
};

export const deleteHero = ( heroId ) => {
  return {
    type: DELETE_HERO,
    payload: heroId
  };
};
