import React from 'react'
import Search from './search/search'

const Splash = (props) => {
    return(
        <div className="splash">
            <h1>Find your adventure</h1>
            <h3>Discover the adventure for you from our amazing selection of themes</h3>
            <div className="search">
                <Search/>
            </div>
            
        </div>
    )
}

export default Splash