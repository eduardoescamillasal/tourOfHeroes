import {combineReducers} from "redux";
import heroesReducer from "./heroesReducer";

const rootReducer = combineReducers({
  hero: heroesReducer,
});

export default rootReducer;
