import typeColors from './typeColors'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.scss';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function CustomCard({pokemon,handleClick}) {
    const navigate = useNavigate();

    // Function to handle adding Pokemon to the cart
    const handleAddToCart = (pokemon) => {
        handleClick(pokemon); 
        navigate('/cart');
    };
    return (
        <>
            <Card border="light" className='pokemon-card'>
                <Card.Img className='card-img mx-auto' variant="top" src={pokemon.sprites.front_default} />
                <Card.Body className='card-body-wc'>
                    <Card.Title className='card-title text-light'>{pokemon.name.toUpperCase()}</Card.Title>
                    <div className='card-body'>
                        {
                        pokemon.types.map((type, index) => {
                            return (
                                <div  key={index} style={{ backgroundColor: typeColors[type.type.name] }}>
                                    {type.type.name}
                                </div>
                            )
                        })
                        }
                    </div>
                    <ListGroup className='card-list-container pb-3' variant="flush">
                        <ListGroup.Item className='card-list-item font-weight-bold' key={1}>HP: {pokemon.stats[0].base_stat}</ListGroup.Item>
                        <ListGroup.Item className='card-list-item font-weight-bold' key={2}>Attack: {pokemon.stats[1].base_stat}</ListGroup.Item>
                        <ListGroup.Item className='card-list-item font-weight-bold' key={3}>Defense: {pokemon.stats[2].base_stat}</ListGroup.Item>
                        <ListGroup.Item className='card-list-item font-weight-bold' key={4}>Ability: {pokemon.abilities[0].ability.name}</ListGroup.Item>
                        <ListGroup.Item className='card-list-item font-weight-bold' key={5}>Price: <span className="text-danger">${pokemon.price}</span></ListGroup.Item>
                    </ListGroup>
                    <Button className="card-button" variant="primary" id={pokemon.id} onClick={() => handleAddToCart(pokemon)}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </>
        
    );
}

export default CustomCard;
