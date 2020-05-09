import React from 'react';

import { Link } from 'react-router-dom';

import './navbar.scss';

import CustomLink from '../../UI-components/CustomLink/CustomLink';

import CustomButton from '../../UI-components/CustomButton/CustomButton';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-item logo">
                <Link to="/"> <img src="http://wisors.designpythons.com/wp-content/uploads/2020/04/logo.jpg" alt="Wisors" /> </Link>
            </div>
            <div className="navbar-item menu">
                <CustomLink >Blog</CustomLink>
                <CustomLink >Courses</CustomLink>
                <CustomLink >Resources</CustomLink>
                <CustomLink >Services</CustomLink>
                <CustomLink >Pricing</CustomLink>
                <Link to="/register">
                    <CustomLink >Service Provider Registration</CustomLink>
                </Link>

                <Link to="/profile">
                    <CustomLink >Profile</CustomLink>
                </Link>
            </div>
            <div className="navbar-item signin">




                <CustomButton
                    type="button" variantOne >Log In</CustomButton>
                <CustomButton
                    type="button">Sign Up</CustomButton>




            </div>
        </div>
    )

}

export default Navbar;
