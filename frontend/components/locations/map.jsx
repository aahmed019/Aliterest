import React from 'react'

export default class Map extends React.Component{
    
    componentDidMount(){
        const options = {
            center:{lat: +this.props.lat, lng: +this.props.lng},
            zoom: 20,
            disableDefaultUI: true,
            mapTypeId: 'terrain'
        }
        this.map = new google.maps.Map(this.mapNode, options)
    }

    render(){
        return (
        <div style={{width:'100%', height: '450px'}} ref={ map => this.mapNode = map }></div>
        )
        }
}