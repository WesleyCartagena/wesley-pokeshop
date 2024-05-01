import './index.scss';
import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, setCart }) => {
  const remove_pokemon = (id) =>{
    const updateCart = cart.filter((cart)=>cart.id !== id);
    setCart(updateCart)
};

const handleChangeQuantity = (id, newQuantity) => {
    newQuantity = Math.max(1, newQuantity);
    
    const updatedCart = cart.map((cart) =>
      cart.id === id ? { ...cart, quantity: newQuantity } : cart
    );
    setCart(updatedCart);
    };
    const handleBuy = () => {
      // Clear the cart
      setCart([]);
      // Display a thank you message
      setShowMessage(true);
    };
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity;
    }
    totalPrice = totalPrice.toFixed(2);

    const [showMessage, setShowMessage] = useState(false);
    return(
        <Container className="mt-5">
        {cart.length > 0 ? (
          <div>
            <h2>Cart Page</h2>
            <div>
              {cart.map((item) => (
                <Card key={item.id} className="mb-3" style={{backgroundColor:'#0075BE'}}>
                  <Card.Body>
                    <Button variant="danger" className="float-end" onClick={() => remove_pokemon(item.id)}>
                      <FontAwesomeIcon icon={faTimes} />
                    </Button>
                    <Card.Title className='text-light'>{item.name.toUpperCase()}</Card.Title>
                    <Card.Subtitle className="mb-2 text-light">Price: ${item.price}</Card.Subtitle>
                    <Card.Img variant="top" src={item.sprites.front_default} alt={item.name} style={{ width: '100px', height: 'auto' }} />
                    <div className="d-flex align-items-center">
                      <Button variant="danger" onClick={() => handleChangeQuantity(item.id, item.quantity - 1)}>
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                      <Form.Control type="number" value={item.quantity} onChange={(e) => handleChangeQuantity(item.id, parseInt(e.target.value))} className="mx-2" />
                      <Button variant='success' onClick={() => handleChangeQuantity(item.id, item.quantity + 1)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                    </div>
                    <div className='text-light'>${(item.price * item.quantity).toFixed(2)}</div>
                  </Card.Body>
                </Card>
              ))}
              <div className="text-end mt-3 ">
              <strong style={{ fontSize:'20px'}}>Total Price: ${totalPrice}</strong>
              <Button variant='primary' size='lg' onClick={handleBuy} style={{ backgroundColor: '#FF5733', color: 'white', padding: '10px 70px', marginLeft: '20px' }}>Buy</Button>
              </div>
              </div>
          </div>
        ) : (
          <div className="text-center mt-5 mb-3">
            <h3 className="text-dark">Your cart is empty</h3>
            {showMessage && (
                <h3 className="mt-3">Thank you for your order!</h3>
            )}
          </div>
          
        )}
      </Container>
  );
}
export default Cart;