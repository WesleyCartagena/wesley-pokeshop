import './index.scss';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import typeColors from '../Card/typeColors';



function Search(){
    const[pokeData,setData] = useState([])
    const[pokemon,setPokemon] = useState('')

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    
    const searchPokemon = () =>{
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
          })
          setPokemon('')
    }
  
    const typeColors = {
        bug: '#729f3f',
        dragon: '#53a4cf',
        fairy: '#fdb9e9',
        fire: '#fd7d24',
        ghost: '#7b62a3',
        ground: '#f7de3f',
        normal: '#a4acaf',
        pyschic: '#f366b9',
        steel: '#9eb7b',
        dark: '#707070',
        electric: '#eed535',
        fighting: '#d56723',
        flying: '#3dc7ef',
        grass: '#9bcc50',
        ice: '#51c4e7',
        poison: '#b97fc9',
        rock: '#a38c21',
        water: '#4592c4'
    }
    return(
        <section class="container search-page">
            <div className="search-bar">
                <input
                value={pokemon}
                onChange={event => setPokemon(event.target.value)}
                placeholder='Enter Pokemon(no caps)'
                type="text" />
                <button onClick={searchPokemon}>Search Pokemon</button>
            </div>
            {pokeData.name ?<div className="featured-pokemon">
                <div className="pokemon">
                    {pokeData.sprites ? <img src={pokeData.sprites.front_default} alt="pokemon" id="img"></img>:null}
                    <h1>{pokeData.name}</h1>
                    {
                        pokeData.types.map(type => {
                        return (
                            <p  style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </p>
                            )   
                        })
                    }
                    {pokeData.stats ?<p>{pokeData.stats[0].stat.name}: {pokeData.stats[0].base_stat}</p> : null}
                    {pokeData.stats ?<p>{pokeData.stats[1].stat.name}: {pokeData.stats[1].base_stat}</p> : null}
                    {pokeData.stats ?<p>{pokeData.stats[2].stat.name}: {pokeData.stats[2].base_stat}</p> : null}
                    {pokeData.stats ?<p>{pokeData.stats[3].stat.name}: {pokeData.stats[3].base_stat}</p> : null}
                    {pokeData.stats ?<p>{pokeData.stats[4].stat.name}: {pokeData.stats[4].base_stat}</p> : null}
                    {pokeData.stats ?<p>{pokeData.stats[5].stat.name}: {pokeData.stats[5].base_stat}</p> : null}
                    {pokeData.weight ? <p>Weight: {pokeData.weight}</p> : null}
                    {pokeData.height ? <p>Height: {pokeData.height}</p> : null}
                    {pokeData.abilities ? <p>Ability: {pokeData.abilities[0].ability.name}</p> : null}
                    {pokeData.name ? <button>POKEBUY</button> : null}
                </div>
            </div> : null}
        </section>
    );
}
export default Search