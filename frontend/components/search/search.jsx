import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = (props) => {
    const [search, setSearch] = useState('')

    const handleChange = (filter) => e => (
        props.updateFilter(filter, e.currentTarget.value)
    );

    // useEffect(() => {
    //     return function cleanup() {
    //         props.clearFilters()
    //     }; 
    // }, [])

    return(
        <div style={{display:'flex', justifyContent:'center'}} key={Math.random()}>
            <div className='search'>  
                <form className='search-form'>
                    <div className='search-input'>
                        <input type="text" placeholder="Try Yosemite, Napa, Moab..." value={search} onChange={
                            e => setSearch(e.target.value)
                        }/>
                    </div> 
                    <div>
                        <select onChange = {handleChange('amenity')} style={{outline:'none', height:'45px'}}>
                            <option value="">Choose an amenity</option>
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
                
        </div>
    )
}

export default Search