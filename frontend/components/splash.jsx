import React from 'react'
import SearchContainer from './search/search_container'

const Splash = (props) => {
    return(
        <div className="splash">
            <h1>Find your adventure</h1>
            <h3>Discover the adventure for you from our amazing selection of themes</h3>
            <div className="search">
                <SearchContainer/>
            </div>
            
        </div>
    )
}

export default Splash