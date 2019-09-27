import React from "react";
import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles({});

export const VendorFoodsHeader = ({ foods }) => {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <Grid justify="space-between" container>
        <Grid item>
          <span className="market-vendor-label">Vendor 1:</span>
        </Grid>
        <Grid item>
          <span className="order-types-label">
            <strong>Pre-Made</strong> | Made-To-Order | Delivery
          </span>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default VendorFoodsHeader;
