import React, { useState, useEffect } from 'react';
// import './Navbar.css';

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`navbar ${scrolling ? 'scrolling' : ''}`}>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#blogs">Blogs</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
