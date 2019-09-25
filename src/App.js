import React from "react";
import { Route } from "react-router-dom";
import Switch from "react-router-transition-switch";
import Fader from "react-fader";
import Layout from "./layout";
import Home from "./view/Home";
import Food from "./view/Food";
import Market from "./view/Market";
import "./App.scss";

const App = () => {
  return (
    <React.Fragment>
      <Layout>
        <Switch component={Fader}>
          <Route path="/market" component={Market} />
          <Route path="/food" component={Food} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </React.Fragment>
  );
};

export default App;
