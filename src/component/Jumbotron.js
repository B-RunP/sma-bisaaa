/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom'

function Jumbotron() {
    return(
    <div className="hero-container">
        <div className="hero-text">
            <h1>SMA Bisa</h1>
            <p>Belajar dengan mudah dan dimana saja</p>
            <Link to="/lesson">Belajar Sekarang</Link>
        </div>
    </div>
    )
}

export default Jumbotron;
