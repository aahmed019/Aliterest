import React from "react";
import { Route } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route.util";
import Home from "./home";
import LoginFormContainer from "./sessions/login_form_container"
import SignupFormContainer from "./sessions/signup_form_container"

const App = () => (
    <div>
        <header>
            <h1>CampCentral</h1>  
        </header>
        <ProtectedRoute path= "/" component={Home}/>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
  );
  
  export default App;