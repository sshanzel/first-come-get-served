import React from "react";
import { connect } from "react-redux";
import toi from "../../assets/toi.jpg";
import { updatedPadded } from "../../store/actions/appActions";
import { withStyles } from "@material-ui/styles";

const styles = {
  contentPadded: {
    marginTop: 40,
    marginLeft: 15
  }
};

export class Stall extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(updatedPadded(true));
  }

  componentDidMount() {
    this.props.dispatch(updatedPadded(false));
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.contentPadded}>
          <h1>Taste of Ilocos</h1>
        </div>
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
        <div className={classes.contentPadded}>Lorem ipsum sit dolor amet</div>
      </React.Fragment>
    );
  }
}

export default connect(null)(withStyles(styles)(Stall));
