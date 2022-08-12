import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'


function Cart({cart}){
  //console.log(cart)
  //console.log(cart[0].name)
    return(
       <>
         {cart ?   <section class="container cart-page">
                        <div class="shopping-cart">
                            <div class="cart_title">CART PAGE</div>
                            {cart.map((cart, i)=>{
                                return <div class="cart_item">
                                            <div class="buttons">
                                                <span class="delete-btn"><FontAwesomeIcon icon={faX} color="#4d4d4e"/></span>
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
                                            <div class="total-price">$549</div>
                                        </div>
                            })}
                        </div>
                    </section>:null}
        </>
    );
}
export default Cart;