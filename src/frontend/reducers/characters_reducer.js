import { RECEIVE_CHARACTER, RECEIVE_CHARACTERS } from "../actions/character_actions";
import { organizeInformation } from "../util/data";

const characterReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CHARACTER:
      newState['current'] = action.character;
      const editName = action.character.name.replace(/ /g, '').replace('.', '');
      if (!oldState['explored']) {
        newState['explored'] = new Set();
        newState['explored'].add(editName)
      } else {
        newState['explored'] = oldState['explored'].add(editName);
      }
      return newState;
    case RECEIVE_CHARACTERS: 
      newState['all'] = organizeInformation(action.all);
      return newState;
    default:
      newState['all'] = [];
      newState['explored'] = new Set();
      return newState;
  }
};

export default characterReducer;