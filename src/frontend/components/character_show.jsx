import React from "react";
import { useSelector } from 'react-redux';


const CharacterShow = (props) => {
  const state = useSelector((state) => state.characters);
  const character = state.current || state.all[1];
  if ( !character ) return null;

  const jobs = character.jobs.map((job, idx) => { 
  
    return (
      <li key={`job-${idx} jobs`}>
        <h4>{job}</h4>
      </li>
    )
  })

  const editName = character.name.replace(/ /g, '').replace('.', '');

  return (
    <div className={`char-show`}>
      <div
        className={`main-pic`}
        id={`${editName}`}
        style={{ backgroundImage: `url(${character.main})` }}
        alt={`${character.name}-main-pic`}
      ></ div>
      <div className='information'>
        <ul className='jobs'>
          {jobs}
        </ul>
        <h2>{character.name}</h2>
      </div>
    </div>
  )
}


export default CharacterShow;