import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { openModal } from '../../actions/modal_actions';
import { login, logout } from '../../actions/session_actions'

const NavBarContainer = (props) =>{
    console.log(props.user)

    window.onscroll = function () {
        if($(window).scrollTop() >= 0){
            $(".navbar").css("position", "fixed");
        }
    }
    
    return(
        <div className="navbar">
            
            <Link to ="/" className="logo">CampCentral</Link>

            {props.user ?
                <div className="dropdown">
                    <img src={props.user.user_photo} alt=""
                    style={{borderRadius:'50%', width:'50px', height:'50px'}}/>
                    <div className="dropdown-content">
                        <ul>
                            <li> <a href="#/profile">Account</a> </li>
                            <li> <a href="https://www.github.com/aahmed019">GitHub</a> </li>
                            <li> <a href="https://www.github.com/aahmed019">LinkedIn</a> </li>
                            <li onClick={props.logout}>Logout</li>
                        </ul>
                    </div>
                </div> 
                :
                <div>
                    <button className ="navButton" onClick={() => props.openModal('login')}>Login</button>
                    <button className ="navButton" onClick={() => props.openModal('signup')}>Sign Up</button>
                    <button className ="navButton demo" onClick={() => props.login({email: 'jack@fakeemail.com', password:'test123'})}>Demo</button>
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
    logout: () => dispatch(logout()),
    openModal: modalType => dispatch(openModal(modalType)),
})

export default connect(mSTP, mDTP)(NavBarContainer)