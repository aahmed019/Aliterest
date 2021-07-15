import React from 'react'

export default class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
    }
    
    componentDidMount(){
        this.props.fetchReservation(this.props.currentUser.id).then(
            this.setState({loading: false})
        )
    }


    render(){
        if(this.state.loading) return null
        const {f_name, l_name} = this.props.currentUser
        const reservations = this.props.reservations.map((reservation, i) => (
            <div key={`reservation-${i}`} className="reservations">
                <div className="reservation-details">
                    <h1>{reservation.title}</h1>
                    <p>{reservation.start_date} to {reservation.end_date}</p>
                    <p>Guests: {reservation.guest_amount}</p>
                </div>
                <div className="reservation-buttons">
                    <button
                        className="edit"
                        onClick={() => this.props.openModal('edit_reservation', Object.assign({}, {reservation: reservation }, {patchReview: this.props.updateReservation}, {closeModal: this.props.closeModal})) }
                        >
                        Edit Reservation
                    </button>

                    <button className="delete" onClick={() => this.props.deleteReservation(reservation.id)}>Cancel Reservation</button>
                    
                </div>
            </div>
        ))
        return(
            <div className="profile">
                    <h1>Hey there {f_name}</h1>

                <br />

                <div className="reservations-wrapper">
                    <div className="reservations-container">
                        {reservations}
                    </div>
                </div>
                
            </div>
        )
    }
}