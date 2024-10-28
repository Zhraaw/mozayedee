import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {

    return (
        
        <footer className="footer">
            <p className="footer-text">© 2024 Your Company. All rights reserved.</p>
            <div className="social-icons">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <FaLinkedin />
                </a>
              
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                    <FaInstagram />
                </a>
                
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                    <FaTwitter />
                </a>
                
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="whatsapp">
                    <FaWhatsapp />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
