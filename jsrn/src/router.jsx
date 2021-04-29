import React, { Component, Fragment } from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import ThreadC from "./pages/thread/thread-c"; 

class Rts extends Component {
    render() {
        return (
            <div>

                <Switch>
                    <Route path="/threadc" component={ThreadC}></Route>
                </Switch>

            </div>


        );
    }
}
export default Rts;