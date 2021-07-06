import React from 'react'

export default class LocationsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchLocations()
    }

    render(){
        const locations = this.props.locations.map((location) => {
            return (
                <ul>
                    <li>{location.title}</li>
                    <li>{location.description}</li>
                    <li>{location.price}</li>
                </ul>
            )
        })
        return(
            <div>
                {locations}
            </div>
        )
    }
}