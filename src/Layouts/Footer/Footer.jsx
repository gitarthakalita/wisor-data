import React from 'react';

import './footer.scss';
import { Link } from 'react-router-dom';
import CustomLink from '../../UI-components/CustomLink/CustomLink';

const Footer = () => (
    <div className="footer-container">
        <div className="footer-item logo">
            <Link to="/"> <img src="http://wisors.designpythons.com/wp-content/uploads/2020/04/logo.jpg" alt="Wisors" /> </Link>

            
        </div>
        <div className="footer-item menu">
            <div >About Us</div>
            <div >Contact Us </div>
            <div >Press </div>
            <div >FAQ</div>
            <div >Privacy</div>
            <div >Terms and Conditions</div>

        </div>
        <div className="footer-item contact-form">








        </div>
    </div>
)


export default Footer;