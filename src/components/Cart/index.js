import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react';

function Cart({cart,setCart,PokePrice,price,setPrice}){
  //console.log(cart)
  //console.log(cart[0].name)
  //const [pokemonInCart,setPokemonInCart] = useState(cart);
  //const nothing = []
  const remove_pokemon = (id) =>{
    const updateCart = cart.filter((cart)=>cart.id !== id);
    setCart(updateCart)
    //let minusPrice = price - PokePrice;
    //setPrice(minusPrice);
  };
  var totalPrice = 0; 
  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + 100;
  }
    return(
       <>
         {cart ?   <section class="container cart-page">
                        <div class="shopping-cart">
                            <div class="cart_title">CART PAGE</div>
                            <div>
                            <div class="labels">
                            <span class="title_quantity">Quantity</span>
                            <span class="title_price">Price</span>
                            </div>
                            </div>
                            {cart.map((cart)=>{
                                return <div key={cart.id} class="cart_item">
                                            <div class="buttons">
                                                <button class="delete-btn" onClick={()=> remove_pokemon(cart.id)}> 
                                                    <FontAwesomeIcon icon={faX} color="#4d4d4e"/> 
                                                </button>
                                            </div>
                                            <div class="cart_image">
                                                <img className="inside_img" src={cart.sprites.front_default} alt=""></img>
                                            </div>
                                            <div class="description">
                                                <span>{cart.name}</span> 
                                                <span>{cart.abilities[0].ability.name}</span>
                                            </div>
                                            <div class="quantity">
                                                <button  class="plus-btn" type="button" name="button">+</button>
                                                <input type="text" name="name" value="1"/>
                                                <button  class="minus-btn" type="button" name="button">-</button>
                                            </div>
                                            <div class="poke-price">${PokePrice}</div>
                                        </div>
                            })}
                            <div class="total-price">
                            <span>TOTAL PRICE:$</span>
                            <span >{totalPrice}</span>
                            </div>
                            
                        </div>
                    </section>:null}
                    

        </>
    );
}
export default Cart;