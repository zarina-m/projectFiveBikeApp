import React from 'react'

function Header() {
    return (
        <header className="innerWrapper">
            <h1>Rider <i className="fas fa-search-location"></i> Radar</h1>
            <p>Enter your location below to fetch information about the closest Bike Share stations near you. Enter both a starting point and ending point to best plan your trip.</p>
            {/* <a href="">Learn more about Bike Share Toronto here.</a> */}
        </header>
    )
}

export default Header;