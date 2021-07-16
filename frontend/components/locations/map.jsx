import React from 'react'

export default class Map extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        const options = {
            center:{lat: 40.622090, lng: -74.027770},
            // center:{lat: +this.props.lat, lng: +this.props.lng},
            zoom: 15,
            disableDefaultUI: true,
            mapTypeId: 'terrain',
            styles: [ 
                { 
                "featureType": "poi", 
                // "stylers": [ 
                //     { "visibility": "off" } 
                // ] 
                } 
            ] 
        }
        this.map = new google.maps.Map(this.mapNode, options)
    }
    
    render(){
        let marker;
        this.props.locations.forEach((location) => {
            marker = new google.maps.Marker({
            position: new google.maps.LatLng(location.lat, location.lng),
            map: this.map,
            animation:google.maps.Animation.Drop
            });
        })
        
        return (
            <div style={{width:'100%', height: '100%'}} ref={ map => this.mapNode = map }></div>
        )
    }
}