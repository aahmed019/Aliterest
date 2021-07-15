import React from 'react'
import ReservationForm from './reservation_form'


export default class EditReservation extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.reservation.reservation
        this.functions = this.props.reservation
        this.handleDate = this.handleDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault()
        this.functions.patchReview(this.state).then(this.functions.closeModal)
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

    handleInput(field){
        return e => this.setState({[field]: e.target.value})
    }

    render(){
        console.log(this.state)
        const { start_date, end_date, guest_amount, price } = this.state
        let days = 0;
        if(start_date && end_date) {
            let diff_time = new Date(end_date).getTime() - new Date(start_date).getTime();
            days = diff_time / (1000 * 3600 * 24);
        }
        return(
            <div>
                {/* <div className='review-edit'>
                    <h1>Edit your review</h1>
                    <form onSubmit={this.handleSubmit} className="form">
                        <input type="date" defaultValue = {start_date} onChange={this.handleDate("start_date")} />
                        <input type="date" defaultValue = {end_date} onChange={this.handleDate("end_date")}/>
                        <select defaultValue = {guest_amount} onChange = {this.handleInput('guest_amount')}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <div className="reservation-buttons">
                            <button className="edit">Edit Reservation</button>
                        </div>
                    </form>
                </div> */}
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
                                    defaultValue={start_date}
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
                                    defaultValue={end_date}
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
                            defaultValue={guest_amount}
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
            </div>
        )
    }
}

