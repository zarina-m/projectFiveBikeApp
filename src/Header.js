import React from 'react'

function Header() {
    return (
        <header className="wrapper">
            <h1>Rider <i className="fas fa-search-location" aria-hidden="true"></i> Radar</h1>
            <p>Enter your location below to fetch information about the closest Bike Share stations near you. Enter both a starting point and ending point to best plan your trip. New to Bike Share Toronto or need some help? <a href="https://bikesharetoronto.com/">Learn more here.</a></p>
        </header>
    )
}

export default Header;