import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = (props) => {
    const [search, setSearch] = useState('')

    const handleChange = (filter) => e => (
        props.updateFilter(filter, e.currentTarget.value)
    );

    useEffect(() => {
        return function cleanup() {
            props.clearFilters()
        }; 
    })

    return(
        <div className="search-container">
            <div className='search'>  
                <form className='search-form'>
                <div className='search-input'>
                    <input type="text" placeholder="Try Yosemite, Napa, Moab..." value={search} onChange={
                        e => setSearch(e.target.value)
                    }/>
                </div> 
                    {/* <div className="search-dates">
                        <div>
                            <input type="date" name="" id="" />
                        </div>
                        <div>
                            <input type="date" name="" id="" />
                        </div>
                    </div> */}

                    <div>
                        <select onChange = {handleChange('amenity')}>
                            <option value="Shower">Shower</option>
                            <option value="Water">Water</option>
                            <option value="Wifi">Wifi</option>
                        </select>
                    </div>
                    <div className="search-button">
                        <Link to = '/locations'>
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