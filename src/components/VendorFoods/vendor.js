import React from "react";
import { Grid } from "@material-ui/core";

export const VendorFoodsHeader = ({ foods }) => {
  return (
    <React.Fragment>
      <Grid justify="space-between" container>
        <Grid item>
          <span className="market-vendor-label">Vendor 1:</span>
        </Grid>
        <Grid item>
          <span>
            <strong>Pre-Made</strong> | Made-To-Order | Delivery
          </span>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default VendorFoodsHeader;
