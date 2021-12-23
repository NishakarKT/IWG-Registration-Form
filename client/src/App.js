import "./App.css";
import React from "react";
import Firstpage from "./component/Firstpage";
import Thirdpage from "./component/Thirdpage";
import Fifthpage from "./component/Fifthpage";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Confirmationoffirstpage from "./component/Confirmationoffirstpage";
import Confirminstemail from "./component/Confirminstemail";
function App() {
  return (
    <>
      <div className="bodyContainer">
        <Router>
          <Switch>
            <Route path="/Fifthpage" exact>
              <Fifthpage />
            </Route>
            <Route path="/Confirminstemail" exact>
              <Confirminstemail />
            </Route>
            <Route path="/Thirdpage" exact>
              <Thirdpage />
            </Route>
            <Route path="/Confirmationoffirstpage" exact>
              <Confirmationoffirstpage />
            </Route>
            <Route path="/" exact>
              <Firstpage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
