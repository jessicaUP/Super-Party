import React, { useState } from "react";
import Explore from "./explore";
import { useDispatch, useSelector } from "react-redux";
import { receiveCharacter } from "../actions/character_actions";


const Logo = (props) => {
  const state = useSelector((state) => state.characters);
  const characters = state.all;
  let current = state.current;
  const dispatch = useDispatch();
  const [ clicked, setClicked ] = useState(true);


  const clickLogo = () => {
    if (clicked) {
      setClicked(false);
    } else {
      if (!current) dispatch(receiveCharacter(characters[1]))
      setClicked(true);
    }
    
  }

  const clickStatus = clicked ? 'open' : 'closed';

  return (
    <div className={`frame ${clickStatus}-frame`}>
      <div className={`${clickStatus}`} id={`switch`} onClick={clickLogo}>
        <div className='logo' ></div>
        <div className={`${clickStatus}-explore explore`}>
          <Explore />
        </div>
      </div>
    </div>
  )
}


export default Logo;