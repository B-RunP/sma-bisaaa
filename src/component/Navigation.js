/* eslint-disable no-undef */
import React from "react";
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

function Navigation({logout, name}) {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/lesson">LESSON</Link></li>
                {/* <li><Link to="/about">ABOUT</Link></li> */}
                <li><button onClick={logout}>{name} <FiLogOut /></button></li>
            </ul>
        </nav>
    )
}

// Navigation.propTypes = {
//     logout: PropTypes.func.isRequired,
//     name: PropTypes.string.isRequired,
// };

export default Navigation;
