import React from 'react'
import LocationsIndexItem from './locations_index_item'
import Map from "./map";


export default class LocationsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchLocations()
    }

    render(){
        const locations = this.props.locations.map((location, i) => (
            <LocationsIndexItem location = {location} key={`location-${i}`} />
            )
        )
        return(
            // <div className="index-wrapper">
            //     <div className="locations-index">
            //         {locations}
            //     </div>
            // </div>
            <div className="location-index-wrapper">
                <div className="location-index-container">
                    <div className = "locations">
                        {locations}
                    </div>
                    <div style={{width:'100%', height: 'inherit'}}>
                        <Map />
                    </div>
                </div>
            </div>
            
        )
    }
}