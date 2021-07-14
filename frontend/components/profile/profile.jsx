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
        // console.log(this.props)
        const {f_name, l_name} = this.props.currentUser
        const reservations = this.props.reservations.map((reservation, i) => (
            <div key={`reservation-${i}`} className="reservations">
                <p>{reservation.title}</p>
                <div className="reservation-details">
                    <p>{reservation.start_date} to {reservation.end_date}</p>
                    <p>Guests: {reservation.guest_amount}</p>
                </div>
                <button onClick={() => this.props.deleteReservation(reservation.id)}>Cancel Reservation</button>
                <button
                        className="edit"
                        onClick={() => this.props.openModal('edit_reservation', Object.assign({}, {reservation: reservation }, {patchReview: this.props.updateReservation}, {closeModal: this.props.closeModal})) }
                        >
                        Edit Reservation
                        </button>
            </div>
        ))
        return(
            <div className="profile">
                <div className="users-name">
                    <p>Hello {f_name} {l_name}</p>
                </div>
                <br />

                <div className="reservations-container">
                    {reservations}
                </div>
            </div>
        )
    }
}