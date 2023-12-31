import React, { useContext } from 'react';
import './CSS/Loginsignup.css'
import { ShopContext } from '../Contex/ShopContext';

const LoginSignup = () => {
    const { checkOut } = useContext(ShopContext);
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />
                </div>
                <button onClick={() => checkOut()}>Continue</button>
                <p className='loginsignup-login'>Already have an accaount? <span>Login now</span></p>
                <div className='loginsignup-agree'>
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, iagree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;