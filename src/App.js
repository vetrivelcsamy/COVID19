import React from "react";
import {
  Route,
  BrowserRouter, Switch
} from 'react-router-dom'
import Home from "./components/Home";
import Details from "./components/Details";
import FourOhFour from "./components/Fourohfour";
function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/details/:id' component={Details} />
          <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
