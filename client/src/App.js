import "./App.css";
import React from "react";
import Firstpage from "./component/Firstpage";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Confirmationoffirstpage from "./component/Confirmationoffirstpage";
function App() {
  return (
    <>
      <div className="bodyContainer">
        <Router>
          <Switch>
            <Route path="/Confirmationoffirstpage" exact>
              <Confirmationoffirstpage />
            </Route>
            <Route path="/" exact>
              <Firstpage />
            </Route>
            {/* <Redirect to="/Firstpage" /> */}
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
