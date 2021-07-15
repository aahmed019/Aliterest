import React from 'react'

export default class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.newState = Object.assign({}, this.props.reservation)
        this.state = this.props.reservation
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleDate(field) {
        return (e) => {
            let date = new Date(e.target.value)
            let utc = date.getTime() + (date.getTimezoneOffset() * 60000)
            this.setState({
                [field]: new Date(utc + (3600000 * 10))
                });
            };
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.end_date < this.state.start_date) return null
        const reservation = Object.assign({}, this.state, {location_id: this.props.location.id});
        this.props.createReservation(reservation).then(this.props.ownProps.history.push('/profile'), err => alert(err.errors[0]))
        this.setState(this.newState)
    }
    handleInput(field) {
        return (e) => {
        this.setState({
            [field]: e.target.value,
            });
        };
    }
    render(){
        
        const { price } = this.props.location;
        const { start_date, end_date, guest_amount } = this.state;
        let days = 0;
        if(start_date && end_date) {
            let diff_time = end_date.getTime() - start_date.getTime();
            days = diff_time / (1000 * 3600 * 24);
        }

        return(
            <div className="price-show-container">
                <div className="price">
                    <h1> ${price}</h1>
                    <p>
                    average per night ({guest_amount} {guest_amount > 1 ? "guests" : "guest"})
                    </p>
                </div>
                <form onSubmit={this.handleSubmit} className="show-page-form">
                    <div id="date-form">
                        <div className="dates">
                            <div className="input-group">
                                <label className="form-label" htmlFor="checkin">
                                    Check in:
                                </label>
                                <input
                                    className="form-control side-by-side"
                                    type="date"
                                    id="checkin"
                                    min={new Date().toISOString().split('T')[0]}
                                    onChange={this.handleDate("start_date")}
                                />
                            </div>
    
                            <div className="input-group ">
                                <label className="form-label" htmlFor="checkout">
                                    Check out:
                                </label>
                                <input
                                    className="form-control"
                                    type="date"
                                    min={new Date().toISOString().split('T')[0]}
                                    id="checkout"
                                    onChange={this.handleDate("end_date")}
                                />
                            </div>
                        </div>
                    </div>
    
                    <div className="guests">
                        <label htmlFor="guests_amount">Guests: </label>
                        <select
                            className="guest-select"
                            onChange={this.handleInput("guest_amount")}
                        >
                            <option value="1" defaultValue>
                            1 guest
                            </option>
                            <option value="2">2 guests</option>
                            <option value="3">3 guests</option>
                            <option value="4">4 guests</option>
                        </select>
                    </div>
    
                    <div className="subtotal">
                        <p>
                            Subtotal: $
                            {days * price * guest_amount > 0 ? days * price * guest_amount : 0}
                        </p>
                    </div>
                    <div className="book-button">
                        <button style={{width:'100%'}}>Book!</button>
                    </div>
                </form>
            </div>
        )
    }
    
}