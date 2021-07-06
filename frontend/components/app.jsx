import React from "react";
import { Route, Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route.util";
import Home from "./home";
import LoginFormContainer from "./sessions/login_form_container"
import NavBarContainer from "./sessions/Nav/navbar_container";
import SignupFormContainer from "./sessions/signup_form_container"
import Modal from './modal/modal'
import LocationsIndexContainer from "./locations/locations_container";
const App = () => (
    <div>
        <Modal/>
        <Switch>
            <Route exact path ="/" component={NavBarContainer}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
        <ProtectedRoute path= "/" component={Home}/>
        <Route path="/" component={LocationsIndexContainer} />
    </div>
  );
  
  export default App;