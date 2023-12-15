import React, { createContext, useState } from "react";
import Swal from "sweetalert2";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);


const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItem] = useState(getDefaultCart());

    //-------Add to Cart Function -----------------//
    const addtoCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added to Cart",
            showConfirmButton: false,
            timer: 1500
          });
    }

    //-------Remove From Cart Function --------------//
    const removeCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Remove from cart",
            showConfirmButton: false,
            timer: 1500
          });
    }

    //------- Get Total Cart Amount------------------//

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            } 
        }
        return totalAmount;
    }

    // ------GetTotal in Navbar Function----------//
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const checkOut = () =>{
        Swal.fire({
            position: "center",
            icon: "info",
            title: "Comming Soon !",
            showConfirmButton: true,
            timer: 1500
          });
    }



    //-------Function Value Provider----------------//
    const contextValue = {checkOut, getTotalCartItems, getTotalCartAmount, all_product, cartItems, addtoCart, removeCart }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;