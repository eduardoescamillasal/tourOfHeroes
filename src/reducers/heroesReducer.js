import {ADD_HERO, EDIT_HERO, DELETE_HERO} from "../actions/heroActions";

const initialState = {
  heroes: [
    {id: 1, name: "Spider-Man", favId: 1},
    {id: 2, name: "Iron Man", favId: 2},
    {id: 3, name: "Narco", favId: 3},
    {id: 4, name: "Magneta", favId: 15},
    {id: 5, name: "RubberMan", favId: 14},
  ],
};

function heroesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HERO:
      return {...state, heroes: [...state.heroes, action.payload]};
    case EDIT_HERO:
      return {
        ...state,
        heroes: state.heroes.map((existingHero) =>
          existingHero.id === action.payload.id ? action.payload : existingHero
        ),
      };
    case DELETE_HERO:
      return {
        ...state,
        heroes: state.heroes.filter((hero) => hero.id !== action.payload),
      };
    default:
      return state;
  }
}

export default heroesReducer;
