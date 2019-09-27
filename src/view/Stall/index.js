import React from "react";
import { connect } from "react-redux";
import toi from "../../assets/toi.jpg";
import { updatedPadded } from "../../store/actions/appActions";

export class Stall extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(updatedPadded(true));
  }

  render() {
    this.props.dispatch(updatedPadded(false));

    return (
      <React.Fragment>
        <h1>Taste of Ilocos</h1>
        <img
          style={{
            width: "100%",
            height: 360,
            objectFit: "cover"
          }}
          src={toi}
          alt="Taste of Ilocos"
        />
        <br />
        aasdadas
      </React.Fragment>
    );
  }
}

export default connect(null)(Stall);
