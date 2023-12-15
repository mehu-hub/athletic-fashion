import React, { useContext, useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo-blue.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Contex/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("");
    const { getTotalCartItems } = useContext(ShopContext)
    return (

        <div>
            {/* <div className='navbar'>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                </div>
                <ul className='nav-menu'>
                    <li onClick={() => { setMenu("shop") }}>
                        <Link style={{ textDecoration: 'none' }} to={'/'}>Shop</Link>
                        {menu === "shop" ? <hr /> : <></>}
                    </li>

                    <li onClick={() => { setMenu("mens") }}>
                        <Link style={{ textDecoration: 'none' }} to={'/mens'}>Men</Link>
                        {menu === "mens" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("womens") }}>
                        <Link style={{ textDecoration: 'none' }} to={'/womens'}>Women</Link>
                        {menu === "womens" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("kids") }}>
                        <Link style={{ textDecoration: 'none' }} to={'/kids'}>Kids</Link>
                        {menu === "kids" ? <hr /> : <></>}
                    </li>
                </ul>
                <div className='nav-login-cart'>
                    <Link to={'/login'}><button>Login</button></Link>
                    <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div> */}
            <nav>
                <ul class="sidebar">
                    <li onclick="hideSidebar()"><a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a></li>
                    <li className="hideOnMobile"><a href="/"><img className='logo' src={logo} alt="" /></a></li>
                    <li><a href='/'>Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Blog's</a></li>
                    <div className='nav-login-cart '>
                        <Link to={'/login'}><button>Login</button></Link>
                        <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
                        <div className="nav-cart-count">{getTotalCartItems()}</div>
                    </div>
                </ul>
                <ul class="">
                    <li className="font-bold text-2xl"><a href="/"><img className='logo' src={logo} alt="" /></a></li>
                    <div>
                        <ul className='nav-menu'>
                            <li className='hideOnMobile' onClick={() => { setMenu("shop") }}>
                                <Link style={{ textDecoration: 'none' }} to={'/'}>Shop</Link>
                                {menu === "shop" ? <hr /> : <></>}
                            </li>

                            <li className='hideOnMobile' onClick={() => { setMenu("mens") }}>
                                <Link style={{ textDecoration: 'none' }} to={'/mens'}>Men</Link>
                                {menu === "mens" ? <hr /> : <></>}
                            </li>
                            <li className='hideOnMobile' onClick={() => { setMenu("womens") }}>
                                <Link style={{ textDecoration: 'none' }} to={'/womens'}>Women</Link>
                                {menu === "womens" ? <hr /> : <></>}
                            </li>
                            <li className='hideOnMobile' onClick={() => { setMenu("kids") }}>
                                <Link style={{ textDecoration: 'none' }} to={'/kids'}>Kids</Link>
                                {menu === "kids" ? <hr /> : <></>}
                            </li>
                        </ul>
                    </div>
                    <div className='nav-login-cart'>
                        <Link className='hideOnMobile' to={'/login'}><button>Login</button></Link>
                        <Link className='hideOnMobile' to={'/cart'}><img src={cart_icon} alt="" /></Link>
                        <div className="nav-cart-count hideOnMobile">{getTotalCartItems()}</div>
                    </div>
                    <li className="menu-btn" onclick="showSidebar()"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a></li>
                </ul>
            </nav>
        </div>

    );
};

export default Navbar;