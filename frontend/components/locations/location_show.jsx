import React from 'react'

export default class LocationShow extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.location
    }

    componentDidMount(){
        this.props.fetchLocation(this.props.locationId)
    }

    render(){
        console.log(this.props)
        if(this.props.location === undefined) return null
        return(
            <div>
                <img src="https://picsum.photos/400/400/?random" alt="" />
                <h2>{this.props.host_id}</h2>
                <h2>{this.props.location.description}</h2>
                <h2>lat: {this.props.location.latitude}</h2>
                <h2>long: {this.props.location.longitude}</h2>
                <h2>price: {this.props.location.price}</h2>
            </div>
        )
    }
}