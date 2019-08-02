import React from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../pokeClasses';
import { Scrollbars } from 'react-custom-scrollbars';

import './styles/PokeList.css';

const PokeList = ({handleOnClick }) => {
    const cells = pokeClasses.map(pokeClass => {
        return (
          <PokeCell 
            key={pokeClass.id} 
            pokeClass={pokeClass}
            handleOnClick={handleOnClick} 
          />
        );
      });

    return (
      <Scrollbars className="poke-list" style={{ width: 400, height: 300 }}>
        {cells}
      </Scrollbars>
    )
  }
  
  export default PokeList;