
const heroesReducerActions = {
  ADD_HERO: (state, action) => ({
    ...state,
    heroes: [...state.heroes, action.payload],
  }),

  EDIT_HERO: (state, action) => ({
    ...state,
    heroes: state.heroes.map((existingHero) =>
      existingHero.id === action.payload.id ? action.payload : existingHero
    ),
  }),

  DELETE_HERO: (state, action) => ({
    ...state,
    heroes: state.heroes.filter((hero) => hero.id !== action.payload),
  }),

  MARK_AS_FAVORITE: (state, action) => {
    const maxFavId = Math.max(...state.heroes.map((hero) => hero.favId || 0));
    return {
      ...state,
      heroes: state.heroes.map((hero) =>
        hero.id === action.payload ? {...hero, favId: maxFavId + 1} : hero
      ),
    };
  },

  INCREMENT_FAVORITE_COUNT: (state, action) => ({
    ...state,
    heroes: state.heroes.map((hero) =>
      hero.id === action.payload ? {...hero, favoriteCount: (hero.favoriteCount || 0) + 1} : hero
    ),
  }),
  SET_INITIAL_HEROES: (state, action) => ({
    ...state,
    heroes: action.payload,
  }),
  FETCH_HERO_SUCCESS: (state, action) => {
    const updatedHeroes = state.heroes.map((hero) =>
      hero.id === action.payload.id ? action.payload : hero
    );
    if (!updatedHeroes.find((hero) => hero.id === action.payload.id)) {
      updatedHeroes.push(action.payload);
    }
    return {...state, heroes: updatedHeroes};
  },
};

const initialState = {
  heroes: [
    {id: 1, name: "Spider-Man", favId: 1},
    {id: 2, name: "Iron Man", favId: 2},
    {id: 3, name: "Narco", favId: 3},
    {id: 4, name: "Magneta", favId: 15},
    {id: 5, name: "RubberMan", favId: 14},
  ],
};

const heroesReducer = (state = initialState, action) => {
  const handler = heroesReducerActions[action.type];
  return handler ? handler(state, action) : state;
};

export default heroesReducer;
