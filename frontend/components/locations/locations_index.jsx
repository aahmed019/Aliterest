import React from 'react'
import LocationsIndexItem from './locations_index_item'
// import Map from "./map";
import MapContainer from './map_container';
import SearchContainer from '../search/search_container'


export default class LocationsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchLocations(this.props.filters)
    }

    componentDidUpdate(prevProps){
        if (prevProps.filters !== this.props.filters) {
            this.props.fetchLocations(this.props.filters)
        }
    }

    componentWillUnmount(){
        this.props.clearLocations()
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
            <div>
                <div className="search search-container">
                    <SearchContainer/>
                </div>
                <div style={{paddingTop:'150px'}}></div>
                <div className="location-index-wrapper">
                    <div className="location-index-container">
                        <div className = "locations">
                            {locations}
                        </div>
                        <div style={{width:'100%', height: 'inherit'}}>
                            <MapContainer />
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}