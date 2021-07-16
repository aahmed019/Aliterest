import React from 'react'
import { Link } from 'react-router-dom'

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

    componentWillUnmount(){
        this.props.clearReservations()
    }


    render(){
        if(this.state.loading) return null
        console.log(this.props)
        const {f_name, l_name} = this.props.currentUser
        const reservations = this.props.reservations.map((reservation, i) => (
                <div key={`reservation-${i}`} className="reservations">
                    <Link to={`locations/${reservation.location_id}`}
                    style={{textDecoration:'none', color: 'black'}}>
                        <div className="reservation-details">
                        <div className="location-index-img">
                            <img src={reservation.photos[0]} alt="location-img"/>
                        </div>
                            <h1>{reservation.title}</h1>
                            <p>{reservation.start_date} to {reservation.end_date}</p>
                            <p>Guests: {reservation.guest_amount}</p>
                        </div>
                    </Link>
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