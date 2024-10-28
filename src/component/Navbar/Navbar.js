import React from 'react';
import './Navbar.css';
import SearchBar from './SearchBar';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    if (location.pathname !== '/') {
        return null;
    }

    const handleSearchSelect = (selectedTerm) => {
        console.log("Selected term:", selectedTerm);

    };


    return (
        <nav className="navbar">
            <h1>Welcome to the Professional Auctions website </h1>
            <div className="search-container">
                <SearchBar onSearchSelect={handleSearchSelect} />
            </div>
        </nav>
    );
};

export default Navbar;
