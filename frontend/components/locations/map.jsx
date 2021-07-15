import React from 'react'

export default class Map extends React.Component{
    
    componentDidMount(){
        const options = {
            center:{lat: 40.622090, lng: -74.027770},
            // center:{lat: +this.props.lat, lng: +this.props.lng},
            zoom: 20,
            disableDefaultUI: true,
            mapTypeId: 'terrain'
        }
        this.map = new google.maps.Map(this.mapNode, options)
    }

    render(){
        return (
            <div style={{width:'100%', height: '100%'}} ref={ map => this.mapNode = map }></div>
        )
        }
}