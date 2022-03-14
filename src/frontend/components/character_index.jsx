import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import CharacterShow from "./character_show";
import { receiveCharacter } from "../actions/character_actions";



const CharacterIndex = (props) => {
  const state = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const characters = state.all;
  const current = state.current;

  const clickCharacter = (character) => {
    return () => {
      dispatch(receiveCharacter(character));

    }
  }

  const renderIndex = Object.values(characters).map((character, idx) => {
  const editName = character.name.replace(/ /g, '').replace('.', '');
  let clickedIcon;
  if (current) clickedIcon = current.name === character.name;

  return (
    <div className={`character-tile index`} id={`charI-${character.id}`} key={`char-${idx}`} onClick={clickCharacter(character)}>
      <div 
        className={`profile-pic index icon-${clickedIcon}`}
        id={editName}
        style={{ backgroundImage: `url(${character.profile})` }}
        alt={`${editName}-picture`}
      ></ div>
    </div>
  )
  })

  return (
    <div className = {`icons main`}>
      <div className={`index-section`}>
        {renderIndex}
      </div>
      <CharacterShow />
    </div>
  )
}


export default CharacterIndex;