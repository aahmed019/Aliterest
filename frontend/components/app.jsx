import React from "react";
import { Route } from "react-router";
import LoginFormContainer from "./sessions/login_form_container"
import SignupFormContainer from "./sessions/signup_form_container"

const App = () => (
    <div>
        <header>
            <h1>CampCentral</h1>  
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
  );
  
  export default App;