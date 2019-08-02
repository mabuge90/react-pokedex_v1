import React from 'react';

import './styles/PokeTitle.css';
import pokeball from '../assets/pokeball.png';

const PokeTitle = () => {
    return (
        <section className = 'poke-title'>
            <img src = {pokeball}></img>
        </section>
    )
}

export default PokeTitle;