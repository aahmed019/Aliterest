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
        if(this.state.loading) return <div>Loading...</div>
        const {f_name, l_name} = this.props.currentUser
        const reservations = this.props.reservations.map((reservation, i) => (
            <div key={`reservation-${i}`}>
                <p>{reservation.title}</p>
                <p>{reservation.start_date} to {reservation.end_date}</p>
                <button onClick={() => this.props.deleteReservation(reservation.id)}>Cancel Reservation</button>
            </div>
        ))
        return(
            <div className="profile">
                <div className="users-name">
                    <p>Hello {f_name} {l_name}</p>
                </div>
                <br />

                <div className="reservations">
                    {reservations}
                </div>
            </div>
        )
    }
}