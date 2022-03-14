import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

import CharacterIndex from "./character_index";

import { receiveCharacters } from "../actions/character_actions";

const Main = () => {

  const characters = useSelector((state) => state);
  const dispatch = useDispatch();


  const fetchCharacters = async () => {
    const response = await axios
      .get('https://www.amiiboapi.com/api/amiibo/?gameseries=Super Mario')
      .catch((error) => {
        console.log('ERROR', error);
      });
    dispatch(receiveCharacters(response.data));
  }

  useEffect(() => {
    fetchCharacters();
  }, []);


  return (
    <>
      <CharacterIndex />
    </>
  )
}


export default Main;