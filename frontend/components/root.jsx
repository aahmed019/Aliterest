import { HashRouter } from "react-router-dom";
import React from "react"
import { Provider } from "react-redux";
import App from "./app";
import Footer  from "./footer/footer";

const Root = ({store}) => (
    <Provider store = {store}>
        <HashRouter>
            <App/>
        </HashRouter>
        {/* <Footer/> */}
    </Provider>
)

export default Root