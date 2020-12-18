import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Landing from "./components/Landing";
import PlantMatch from "./components/PlantMatch";
import PlantCare from "./components/PlantCare";
import PlantList from "./components/PlantList";

class App extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/" exact component={Landing} />

          <Route
            path="/plantmatch"
            component={PlantMatch}
            //
          />
          <Route
            path="/about"
            component={About}
            //
          />
          <Route path="/plantlist" component={PlantList} />
          <Route path="/:plantId" component={PlantCare} />
        </Switch>
      </div>
    );
  }
}

export default App;
