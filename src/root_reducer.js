import { combineReducers } from 'redux';
import characterReducer from './frontend/reducers/characters_reducer';


const rootReducer = combineReducers({
  characters: characterReducer
});

export default rootReducer;