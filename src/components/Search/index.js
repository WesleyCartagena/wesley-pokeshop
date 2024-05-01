import './index.scss';
import React, {useState} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

const Search = ({ cart, setCart }) => {
    const[poke__Data,setData] = useState([])
    const[pokemon,setPokemon] = useState('chimchar')
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    
    const calculatePrice = (stats) => {
        // Define weights for different stats
        const weights = {
            hp: 0.1,
            attack: 0.3,
            defense: 0.2,
            "special-attack": 0.3,
            "special-defense": 0.2,
            speed: 0.4
        };

        // Calculate the weighted sum
        const weightedSum = stats.reduce((sum, stat) => {
            return sum + (stat.base_stat * weights[stat.stat.name]);
        }, 0);

        // Normalize the value (optional)
        const normalizedValue = weightedSum / 100;

        // Define price range or formula
        const basePrice = 100; 
        const price = basePrice + (normalizedValue * 50); 

        return price;
    };

    const searchPokemon = () =>{
        axios.get(url).then((response) => {
            const pokemonRecord = response.data;
            const price = calculatePrice(pokemonRecord.stats);
            pokemonRecord.price = price; // Set the price here
            setData(pokemonRecord);
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
    
    const handleClick = () => {
        if (poke__Data.name) {
          const existingPokemonIndex = cart.findIndex((item) => item.id === poke__Data.id);
          if (existingPokemonIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingPokemonIndex].quantity++;
            setCart(updatedCart);
          } else {
            setCart([...cart, { ...poke__Data, quantity: 1 }]);
          }
        }
    };

    const navigate = useNavigate();

    // Function to handle adding Pokemon to the cart
    const handleAddToCart = (pokemon) => {
        handleClick(pokemon);
        navigate('/cart'); 
    };
    
    return(
        <div className="container search-page">
            <div className="search-bar">
                <input
                value={pokemon.toLowerCase()}
                onChange={event => setPokemon(event.target.value)}
                placeholder='Enter Pokemon'
                type="text" />
                <button onClick={searchPokemon}>Search Pokemon</button>
            </div>
            {poke__Data.name ?  <div className="search-pokemon-card-container">
                    <Card border="light" className='search-pokemon-card'>
                        <Card.Img className='search-card-img mx-auto' variant="top" src={poke__Data.sprites.front_default} />
                        <Card.Body className='search-card-body-wc'>
                            <Card.Title className='search-card-title text-light'>{poke__Data.name.toUpperCase()}</Card.Title>
                            <div className='card-body'>
                                {
                                poke__Data.types.map((type, index) => {
                                    return (
                                        <div  key={index} style={{ backgroundColor: typeColors[type.type.name] }}>
                                            {type.type.name}
                                        </div>
                                    )
                                })
                                }
                            </div>
                            <ListGroup className='search-card-list-container' variant="flush">
                            {poke__Data.stats ?    <ListGroup.Item className='search-card-list-item font-weight-bold' key={0}>{poke__Data.stats[0].stat.name}: {poke__Data.stats[0].base_stat}</ListGroup.Item>: null}
                            {poke__Data.stats ?  <ListGroup.Item className='search-card-list-item font-weight-bold' key={1}>{poke__Data.stats[1].stat.name}: {poke__Data.stats[1].base_stat}</ListGroup.Item>: null}
                            {poke__Data.stats ?  <ListGroup.Item className='search-card-list-item font-weight-bold' key={2}>{poke__Data.stats[2].stat.name}: {poke__Data.stats[2].base_stat}</ListGroup.Item>: null}
                            {poke__Data.stats ?  <ListGroup.Item className='search-card-list-item font-weight-bold' key={3}>{poke__Data.stats[3].stat.name}: {poke__Data.stats[3].base_stat}</ListGroup.Item>: null}
                            {poke__Data.stats ?  <ListGroup.Item className='search-card-list-item font-weight-bold' key={4}>{poke__Data.stats[4].stat.name}: {poke__Data.stats[4].base_stat}</ListGroup.Item>: null}
                            {poke__Data.stats ?  <ListGroup.Item className='search-card-list-item font-weight-bold' key={5}>{poke__Data.stats[5].stat.name}: {poke__Data.stats[5].base_stat}</ListGroup.Item>: null}
                            {poke__Data.stats ?  <ListGroup.Item className='search-card-list-item font-weight-bold' key={6}>Weight: {poke__Data.weight}</ListGroup.Item>: null}
                            {poke__Data.stats ?  <ListGroup.Item className='search-card-list-item font-weight-bold' key={7}>Height: {poke__Data.height}</ListGroup.Item>: null}
                            {poke__Data.stats ?  <ListGroup.Item className='search-card-list-item font-weight-bold' key={8}>Ability: {poke__Data.abilities[0].ability.name}</ListGroup.Item>: null}
                            {poke__Data.price ?<ListGroup.Item className='card-list-item font-weight-bold' key={9}>Price: <span className="text-danger">${poke__Data.price}</span></ListGroup.Item>: null}
                            </ListGroup>
                        </Card.Body>
                        {poke__Data.name ?  <Button className='search-card-button' variant="primary" id={pokemon.id} onClick={handleAddToCart} >PokeBuy</Button>: null}
                    </Card>
            </div> : null}
        </div>
    );
}
export default Search