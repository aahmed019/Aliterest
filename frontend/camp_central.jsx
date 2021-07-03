import React from "react";
import ReactDOM from 'react-dom';
import { login, logout } from "./actions/session_actions";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
    window.login = login
    window.logout = logout

    let preloadedState = undefined
    
    if(window.current_user){
        preloadedState = {
            entities: {
                users: { [window.current_user.id]: window.current_user }
            },
            session:{
                id: window.current_user.id
            }
        }
    }

    delete window.current_user

    const store = configureStore(preloadedState)
    window.store = store


    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});