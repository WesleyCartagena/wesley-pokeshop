import './index.scss';
import React, {useState, useEffect} from 'react'
import { getPokemon, getAllPokemon } from '../Helpers/pokemon';
import Card from '../../components/Card';
import axios from 'axios'

function Home() {
    const [pokeData, setPokemonData] = useState([])
    const [loading, setLoading] = useState(true);
    const url = 'https://pokeapi.co/api/v2/pokemon'
    useEffect(() => {
        async function fetchData() {
          let response = await getAllPokemon(url)
          await loadPokemon(response.results);
          setLoading(false);
          console.log(response.results)
        }
        fetchData();
      }, [])
    
      const loadPokemon = async (data) => {
        let poke_Data = await Promise.all(data.map(async pokemon => {
          let pokemonRecord = await getPokemon(pokemon)
          return pokemonRecord
        }))
        setPokemonData(poke_Data);
        console.log(poke_Data)
      }
    return(
        <section class="container home-page">
            <div class="banner">
                <h1>Poke Shop</h1>
                <p>Under Development</p>
            </div>
            <h1 class="title">FEATURED POKEMON</h1>
             <div className="featured-pokemon">
              {pokeData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />
              })}
            </div>
        </section>
    );

}
export default Home;