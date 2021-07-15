import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = (props) => {
    const [search, setSearch] = useState('')

    return(
        <div className="search-container">
            <div className='search'>  
                <form className='search-form'>
                <div className='search-input'>
                    <input type="text" placeholder="Try Yosemite, Napa, Moab..." value={search} onChange={
                        e => setSearch(e.target.value)
                    }/>
                </div> 
                    <div className="search-dates">
                        <div>
                            <input type="date" name="" id="" />
                        </div>
                        <div>
                            <input type="date" name="" id="" />
                        </div>
                        
                    </div>
                    <div className="search-button">
                        <Link to ={{pathname: '/locations', search: search}}>
                            <button type='submit' className='search-button'>
                                <i className="fas fa-search"></i>
                            </button>
                        </Link>
                    </div>
                    </form>
                </div>
                <img src="https://tipichic.co.uk/wp-content/uploads/2014/06/cache/slide1-1200x475.jpg" alt="splash image" className='search-img'/>
        </div>
    )
}

export default Search