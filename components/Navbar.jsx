import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Cart } from './'; 
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
    const {showCart, setShowCart, totalQuantities} = useStateContext();

    const showLinks = () => {
        var topnav = document.getElementById("topnav");
        if (topnav.className === "header-right") {
            topnav.className += " responsive";
        } else {
            topnav.className = "header-right";
        }
    }

    return (

        <div className="navbar-container">
            <div className="header-right" id="topnav">  
                <Link href="/" onClick={showLinks}>Sunny Karamel Art</Link>
                <Link href="/cards">Cards</Link>
                <Link href="/posters">Posters</Link>
                <Link href="/wallarts">Wall Arts</Link>
                <button type="button" className="icon" onClick={() => showLinks()}>
                    <GiHamburgerMenu />
                </button>        
                <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                    <AiOutlineShopping />
                    <div className="cart-item-qty">{totalQuantities}</div>           
                </button> 
            </div>
             
            {showCart && <Cart />}
        </div>
    );
}

export default Navbar;