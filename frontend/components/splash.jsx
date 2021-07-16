import React from 'react'
import SearchContainer from './search/search_container'

const Splash = (props) => {
    return(
        <div className="splash">
            <h1>Find your adventure</h1>
            <h3>Discover the adventure for you from our amazing selection of themes</h3>
            <div className="search search-container">
                <SearchContainer/>
                <img src="https://tipichic.co.uk/wp-content/uploads/2014/06/cache/slide1-1200x475.jpg" alt="splash image" className='search-img'/>
            </div>
            
        </div>
    )
}

export default Splash