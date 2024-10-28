import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearchSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const auctionTerms = [
        'Dutch auction',
        'English auction',
        'Auction date',
        'Auction time',
        'Catalog'
    ];

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value) {
            const filtered = auctionTerms.filter(term =>
                term.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredResults(filtered);
        } else {
            setFilteredResults([]);
        }
    };

    const handleOptionClick = (term) => {
        setSearchTerm(term);
        setFilteredResults([]);
        if (onSearchSelect) {
            onSearchSelect(term);
        }
    };

    return (
        <div className="search-container">
            <div className="search-box-container">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-box"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                {searchTerm && filteredResults.length > 0 && (
                    <ul className="suggestions">
                        {filteredResults.map((term, index) => (
                            <li key={index} onClick={() => handleOptionClick(term)}>
                                {term}
                            </li>
                        ))}
                    </ul>
                )}
                <button className="search-button">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
