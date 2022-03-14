import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { receiveCharacter } from "../actions/character_actions";



const Explore = (props) => {
  const state = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const characters = state.all;
  const explored = state.explored;

  const clickCharacter = (character) => {
    return () => {
      dispatch(receiveCharacter(character));
      const click = document.querySelector(`#switch`);
      click.click();
      const button = document.querySelector(`#charI-${character.id}`)
      button.scrollIntoView();
      button.click()
    }
  }

  const renderIndex = Object.values(characters).map((character, idx) => {
    const editName = character.name.replace(/ /g, '').replace('.', '');
    let clickedIcon = explored.has(editName) ? 'explored' : '';

    return (
      <div className={`character-tile explore`} id={`char-${idx}`} key={`char-${idx}`} onClick={clickCharacter(character)}>
        <div
          className={`profile-pic explore icon-${clickedIcon}`}
          id={editName}
          style={{ backgroundImage: `url(${character.profile})` }}
          alt={`${editName}-picture`}
        ></ div>
      </div>
    )
  })

  return (
    <div className={`icons main`}>
      <div className={`explore-section`}>
        {renderIndex}
      </div>
    </div>
  )
}


export default Explore;