import React from 'react'

export default class LocationShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            start: null,
            end: null,
            days: 0
        }
        this.handleInput = this.handleInput.bind(this)
    }

    componentDidMount(){
        this.props.fetchLocation(this.props.ownProps.match.params.locationId)
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.ownProps.match.params.locationId !== prevProps.ownProps.match.params.locationId) {
            this.props.fetchLocation(this.props.ownProps.match.params.locationId);}    
    }

    handleInput(field){
        return e => {
            this.setState({
                [field]: new Date(e.target.value)
            })

            const {start, end} = this.state

            if(start && end){
                this.setState({
                    days: this.getDifferenceInDays(start, end)
                })
            }
        }
        
    }

    getDifferenceInDays(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60 * 60 * 24)
    }

    render(){
        console.log(this.props)
        if(this.props.location === undefined) return null

        const {days} = this.state

        return(
            <div>
                <div className="showpage_imgContainer">
                    
                    <img className="showpage_img" src="https://picsum.photos/550" alt="" />
                
                    <img className="showpage_img" src="https://picsum.photos/550" alt="" />

                    <img className="showpage_img" src="https://picsum.photos/550" alt="" />

                </div>

                <h1 className="show_location">{this.props.location.title}</h1>

                <div className="price_container">
                    <label > FROM:
                        <input type="date" onChange={this.handleInput('start')} />
                    </label>

                    <label > TO:
                        <input type="date" onChange={this.handleInput('end')} />
                    </label>

                    <h1>Price: {days}</h1>
                </div>

            </div>
        )
    }
}