import React from 'react'

export default class Map extends React.Component{

    componentDidMount(){
        const options = {
            center:{lat: 26.820553, lng: 30.802498},
            zoom: 13,
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