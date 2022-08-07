import React from 'react';
import typeColors from './typeColors'
import './style.scss';

function Card({ pokemon }) {
    return (
        <div className="pokemon">
            <img src={pokemon.sprites.front_default} alt="" />
            <h1>{pokemon.name}</h1>
            {
                pokemon.types.map(type => {
                    return (
                        <div  style={{ backgroundColor: typeColors[type.type.name] }}>
                            {type.type.name}
                        </div>
                    )
                })
            }
                <p >Weight: {pokemon.weight}</p>
                <p>Height: {pokemon.height}</p>
                <p >Ability: {pokemon.abilities[0].ability.name}</p>
                <button>POKEBUY</button>
        </div>
    );
}

export default Card;
