import '../src/style.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CharacterIndex from './frontend/components/character_index';
import Logo from './frontend/components/logo';
import { receiveCharacters } from "./frontend/actions/character_actions";

import axios from "axios";


const App = () => {

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
      <Logo />
      <Router>
        <Routes>
          <Route path='/' element={<CharacterIndex type='index' />} />
          <Route>404 not found</Route>
        </Routes>
      </Router>

    </>
  );
} 

export default App;