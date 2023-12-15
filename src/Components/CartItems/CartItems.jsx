import React, { useContext } from 'react';
import './CartItems.css'
import { ShopContext } from '../../Contex/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { checkOut, getTotalCartAmount, all_product, cartItems, removeCart } = useContext(ShopContext)
    return (
        <div className='cartItems'>
            <div className='cartitem-productbox'>
                <div className="format-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                <div>
                    {
                        all_product.map((e) => {
                            if (cartItems[e.id] > 0) {
                                return <div>
                                    <div className="cartitems-formate format-main">
                                        <img src={e.image} className='carticon-product-icon' alt="" />
                                        <p>{e.name}</p>
                                        <p>${e.new_price}</p>
                                        <button className='quantity'>{cartItems[e.id]}</button>
                                        <p>${e.new_price * cartItems[e.id]}</p>
                                        <img
                                            src={remove_icon}
                                            className='remove-icon'
                                            onClick={() => { removeCart(e.id) }}
                                            alt=""
                                        />
                                        <hr />
                                    </div>
                                </div>
                            }
                            return null;
                        })}
                </div>
            </div>
            <div className='cartitems-down'>
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="total-items">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='total-items'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="total-items">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={checkOut}>PROCEED TO CHECKOUT</button>
                </div> 
            </div>
        </div>
    );
};

export default CartItems;