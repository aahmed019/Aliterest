import React from 'react'

export default class LocationShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            start: null,
            end: null,
        }
        this.handleInput = this.handleInput.bind(this)
    }

    componentDidMount(){
        this.props.fetchLocation(this.props.ownProps.match.params.locationId)
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.ownProps.match.params.locationId !== prevProps.ownProps.match.params.locationId) {
            this.props.fetchLocation(this.props.ownProps.match.params.locationId);
        }    
    }

    handleSubmit(){

    }

    handleInput(field){
        return e => {
            this.setState({
                [field]: new Date(e.target.value)
            })
        }    
    }

    render(){
        console.log(this.props)
        if(this.props.location === undefined) return null

        const { price } = this.props.location
        const { start, end } = this.state
        let days = 0
        if(start, end){
            console.log(start.getTime())
            console.log(end.getTime())
            let diff_time = end.getTime() - start.getTime()
            days = diff_time / (1000 * 3600 * 24)
        }

        return(
            <div>
                <div className="showpage_imgContainer">
                    
                    <img className="showpage_img" src="https://picsum.photos/550" alt="" />
                
                    <img className="showpage_img" src="https://picsum.photos/550" alt="" />

                    <img className="showpage_img" src="https://picsum.photos/550" alt="" />

                </div>

                <h1 className="show_location">{this.props.location.title}</h1>

                <div className="booking_container">

                    <div className ="show_price_container">
                        <h3>{price}</h3>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <label> Check in:
                            <input type="date" onChange={this.handleInput('start')} />
                        </label>

                        <br />
                        <br />

                        <label > Check out:
                            <input type="date" onChange={this.handleInput('end')} />
                        </label>

                        <br />
                        <br />

                        <label htmlFor="guests" className="form-label">Guests</label>
                        <input type="number" id="guests" className="form-control"/>

                        <h1>days: {days > 0 ? days : 0}</h1>
                        <h1>price: {days * price > 0 ? days * price : 0}</h1>

                        <button>Book</button>

                    </form>


                </div>

            </div>
        )
    }
}