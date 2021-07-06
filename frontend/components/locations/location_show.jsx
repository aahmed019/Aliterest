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
        console.log(this.props.ownProps)
        if(this.props.location === undefined) return null
        return(
            <div>
                <img src="https://picsum.photos/400/400/?random" alt="" />
                <h2>{this.props.locationId}</h2>
            </div>
        )
    }
}