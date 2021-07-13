import React from 'react'

export default class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.reservation
        this.handleInput = this.handleInput.bind(this);
    }
    
    handleDate(field) {
        return (e) => {
        this.setState({
            [field]: new Date(e.target.value),
            });
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        // this.props.createReservation()
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
        const { start, end, guests } = this.state;
        let days = 0;
        if ((start, end)) {
            let diff_time = end.getTime() - start.getTime();
            days = diff_time / (1000 * 3600 * 24);
        }

        return(
            <div className="price-show-container">
                <div className="price">
                    <h1> ${price}</h1>
                    <p>
                    average per night ({guests} {guests > 1 ? "guests" : "guest"})
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
                                    onChange={this.handleDate("start")}
                                />
                            </div>
    
                            <div className="input-group ">
                                <label className="form-label" htmlFor="checkout">
                                    Check out:
                                </label>
                                <input
                                    className="form-control"
                                    type="date"
                                    id="checkout"
                                    onChange={this.handleDate("end")}
                                />
                            </div>
                        </div>
                    </div>
    
                    <div className="guests">
                        <label htmlFor="guests_amount">Guests: </label>
                        <select
                            className="guest-select"
                            onChange={this.handleInput("guests")}
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
                            {days * price * guests > 0 ? days * price * guests : 0}
                        </p>
                    </div>
                    <div className="book-button">
                    <button>Book!</button>
                    </div>
                </form>
            </div>
        )
    }
    
}