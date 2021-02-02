import "./App.css";
import "../src/assets/font/stylesheet.css";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Offer">
            <Offer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
