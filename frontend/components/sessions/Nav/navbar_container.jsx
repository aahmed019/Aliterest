import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { login, logout } from '../../../actions/session_actions'


const NavBarContainer = (props) =>{
    console.log(props)
    return(
        <div className="navbar">
            <div>
                <img src="https://cdn.discordapp.com/attachments/163769380222664704/861317010285527080/CampCentral_logo-removebg-preview.png" alt="Logo" style={{width: '125px'}}/>
            </div>
            {props.user ?
                <div>
                    <button><Link to ="/" onClick={props.logout}>Logout</Link></button>
                </div> 
                :
                <div>
                    <button><Link to ="/login">Login</Link></button>
                    <button><Link to ="/signup">Sign Up</Link></button>
                </div>
            }
        </div>
    )
}

const mSTP = (state) => ({
    user: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NavBarContainer)