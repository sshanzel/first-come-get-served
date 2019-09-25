import React, { Component } from "react";
import { Divider } from "@material-ui/core";
import VendorFoods from "../../components/VendorFoods";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Market Place</h1>
        <Divider />
        <br />
        <VendorFoods />
        <VendorFoods />
        <VendorFoods />
      </React.Fragment>
    );
  }
}

export default Home;
