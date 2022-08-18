import './index.scss';
import React, {useState} from 'react'
import axios from 'axios'



function Search({handleClickSearch}){
    const[poke__Data,setData] = useState([])
    const[pokemon,setPokemon] = useState('chimchar')
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    
    const searchPokemon = () =>{
        axios.get(url).then((response) => {
            setData(response.data)
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
            {poke__Data.name ?<div className="featured-pokemon">
                <div className="pokemon">
                    {poke__Data.sprites ? <img src={poke__Data.sprites.front_default} alt="pokemon" id="img"></img>:null}
                    <h1>{poke__Data.name}</h1>
                    {
                        poke__Data.types.map(type => {
                        return (
                            <p  style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </p>
                            )   
                        })
                    }
                    {poke__Data.stats ?<p>{poke__Data.stats[0].stat.name}: {poke__Data.stats[0].base_stat}</p> : null}
                    {poke__Data.stats ?<p>{poke__Data.stats[1].stat.name}: {poke__Data.stats[1].base_stat}</p> : null}
                    {poke__Data.stats ?<p>{poke__Data.stats[2].stat.name}: {poke__Data.stats[2].base_stat}</p> : null}
                    {poke__Data.stats ?<p>{poke__Data.stats[3].stat.name}: {poke__Data.stats[3].base_stat}</p> : null}
                    {poke__Data.stats ?<p>{poke__Data.stats[4].stat.name}: {poke__Data.stats[4].base_stat}</p> : null}
                    {poke__Data.stats ?<p>{poke__Data.stats[5].stat.name}: {poke__Data.stats[5].base_stat}</p> : null}
                    {poke__Data.weight ? <p>Weight: {poke__Data.weight}</p> : null}
                    {poke__Data.height ? <p>Height: {poke__Data.height}</p> : null}
                    {poke__Data.abilities ? <p>Ability: {poke__Data.abilities[0].ability.name}</p> : null}
                    {poke__Data.name ? <button onClick={()=> handleClickSearch(poke__Data)}>POKEBUY</button> : null}
                </div>
            </div> : null}
        </section>
    );
}
export default Search