export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';
export const RECEIVE_CHARACTER = 'RECEIVE_CHARACTER';



export const receiveCharacters = (characters) => {
  return ({
    type: RECEIVE_CHARACTERS,
    all: characters.amiibo
  })
}; 

export const receiveCharacter = (character) => {
  return ({
    type: RECEIVE_CHARACTER,
    character
  })
};


