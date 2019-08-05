import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Home from "./components/Home";
import Food from "./components/Food";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path="/food" component={Food} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </React.Fragment>
  );
};

export default App;
