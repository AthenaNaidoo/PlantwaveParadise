import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { GiPolarStar } from "react-icons/gi";
import { useState, useEffect } from 'react';
import './navBar.css';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            if (window.scrollY > 20){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        };
//checking if the page has been scrolled down to change how navbar looks 

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

    return(
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className='nav-container'>
                <NavLink to="/IMwebApp" className={`nav-logo ${scrolled ? 'scrolled' : ''}`}>
                <GiPolarStar className='star' />               
                </NavLink>
                <div className='nav-menu'>

                <NavLink to="/design" activeclassname="active">
                    Design
                </NavLink>
                <NavLink to="/blog" activeclassname="active">
                Blog
                </NavLink>
                <NavLink to="/art" activeclassname="active">
                Art
                </NavLink>
                </div>
            </nav>
        </header>
    );
};