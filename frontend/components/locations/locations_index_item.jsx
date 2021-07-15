import React from 'react'
import { Link } from 'react-router-dom'

const LocationsIndexItem = props => {
    
    const { location } = props
    const { photos } = props.location
    console.log(location)
    return (
        <div className="index-items-container">
            <Link to={`/locations/${location.id}`} style={{textDecoration:'none', color: 'black'}}>
            <div className="location-index-items">
                <div className="location-index-img">
                    <img src={photos[0]} alt="location-img"/>
                </div>
                <div className="location-index-details">
                    <div className="location-index-title">
                        <h1>{location.title}</h1>
                    </div>
                    <div className="location-index-description">
                        <div className="host-name">
                            <p>Hosted by {location.f_name}</p>
                        </div>

                        <div className="location-price">
                            <p><h1>${location.price}</h1>/NIGHT</p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
    

}

export default LocationsIndexItem




{/* <div className="overlap">
                        <div className="overlap-content">
                            <h1>{location.title}</h1>
                            <a href={`#locations/${location.id}`}>Book now</a>
                        </div>
                    </div> */}