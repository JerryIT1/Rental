import React from "react"
import './navbar.css'
import { useRef } from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import Logo from'./Assets/Logo.png'

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header className="navbar__container">
            <div className="logo-container">
                <img src={Logo} className="Logo"/>
            </div>
            <nav ref={navRef} className="navbar__container-links">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Vehicle Models</a>
                <a href="">Testimonials</a>
                <a href="">Our Team</a>
                <a href="">Contact</a>
                <div className="navbar__container-links-buttons2">
                    <button className="btn-signin">Sign In</button>
                    <button className="btn-register">Register</button>
                </div>

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <div className="navbar__container-links-buttons">
                    <button className="btn-signin">Sign In</button>
                    <button className="btn-register">Register</button>
                </div>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>

        </header>
    )
}

export default Navbar;