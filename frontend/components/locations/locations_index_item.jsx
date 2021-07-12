import React from 'react'
import { Link } from 'react-router-dom'

const LocationsIndexItem = props => {
    
    const { location } = props
    return (
        <div className="location-index-items">
            <Link to={`locations/${location.id}`}>

                <img src="https://picsum.photos/400/400/?random" alt="" />
            </Link>

            {/* <p>{location.title}</p> */}
        </div>
    )
    

}

export default LocationsIndexItem