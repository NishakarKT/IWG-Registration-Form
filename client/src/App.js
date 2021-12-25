import "./App.css";
import React from "react";
import Firstpage from "./component/Firstpage";
import Thirdpage from "./component/Thirdpage";
import Fifthpage from "./component/Fifthpage";
import Sixthpage from "./component/Sixthpage";
import Lastpage from "./component/Lastpage";
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
            <Route path="/Lastpage" exact>
              <Lastpage />
            </Route>
            <Route path="/Sixthpage" exact>
              <Sixthpage />
            </Route>
            <Route path="/Fifthpage" exact>
              <Fifthpage />
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
