import React from 'react'

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
        const { start_date, end_date, guest_amount } = this.state
        return(
            <div>
                <div className='review-edit'>
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
                </div>
            </div>
        )
    }
}