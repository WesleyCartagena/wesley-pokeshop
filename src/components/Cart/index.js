import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import React from 'react';


const Cart = ({ cart, setCart }) => {
  const remove_pokemon = (id) =>{
    const updateCart = cart.filter((cart)=>cart.id !== id);
    setCart(updateCart)
};

  const handleChangeQuantity = (id, newQuantity) => {
    const updatedCart = cart.map((cart) =>
      cart.id === id ? { ...cart, quantity: newQuantity } : cart
    );
    setCart(updatedCart);
  };
  
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
  }
    return(
       <>
         {cart ?   <div className="container cart-page">
                        <div className="shopping-cart">
                            <div className="cart_title">CART PAGE</div>
                            <div>
                            <div className="labels">
                            <span className="title_quantity">Quantity</span>
                            <span className="title_price">Price</span>
                            </div>
                            </div>
                            {cart.map((cart)=>{
                                return <div key={cart.id} className="cart_item">
                                            <div className="buttons">
                                                <button className="delete-btn" onClick={()=> remove_pokemon(cart.id)}> 
                                                    <FontAwesomeIcon icon={faX} color="#4d4d4e"/> 
                                                </button>
                                            </div>
                                            <div className="cart_image">
                                                <img className="inside_img" src={cart.sprites.front_default} alt=""></img>
                                            </div>
                                            <div className="description">
                                                <span>{cart.name}</span> 
                                                <span>{cart.abilities[0].ability.name}</span>
                                            </div>
                                            <div className="quantity">
                                                <button  className="plus-btn" type="button" name="button" onClick={() => handleChangeQuantity(cart.id, cart.quantity + 1)}>+</button>
                                                <input type="text" name="name" value={cart.quantity} onChange={(e) =>handleChangeQuantity(cart.id, parseInt(e.target.value))}/>
                                                <button  className="minus-btn" type="button" name="button" onClick={() =>handleChangeQuantity(cart.id,Math.max(1, cart.quantity - 1) )}>-</button>
                                            </div>
                                            <div class="poke-price">${cart.price * cart.quantity}</div>
                                        </div>
                            })}
                            <div className="total-price">
                            <span>TOTAL PRICE:$</span>
                            <span >{totalPrice}</span>
                            </div>
                            
                        </div>
                    </div>:null}
                    

        </>
    );
}
export default Cart;