import React from 'react'
import { Link } from 'react-router-dom'

const LocationsIndexItem = props => {
    
    const { location } = props
    const { photos } = props.location
    console.log(location)
    return (
        <div className="index-items-container">
            <div className="location-index-items">
                <div className="location-index-img">
                    <img src={photos[0]} alt=""
                    style={{width:'560px', height:'420x', borderRadius:'24px'}}/>
                    
                    <div className="overlap">
                        <div className="overlap-content">
                            <h1>{location.title}</h1>
                            <a href={`#locations/${location.id}`}>Book now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    

}

export default LocationsIndexItem