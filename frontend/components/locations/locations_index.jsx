import React from 'react'
import LocationsIndexItem from './locations_index_item'


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
            <div className="locations-index">
                {locations}
            </div>
        )
    }
}