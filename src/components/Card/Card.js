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
                <p >HP: {pokemon.stats[0].base_stat}</p>
                <p >Attack: {pokemon.stats[1].base_stat}</p>
                <p >Defense: {pokemon.stats[2].base_stat}</p>
                <p >Ability: {pokemon.abilities[0].ability.name}</p>
                <button>POKEBUY</button>
        </div>
    );
}

export default Card;
