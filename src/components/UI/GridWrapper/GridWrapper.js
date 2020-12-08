import React from "react";
import Grid from "@material-ui/core/Grid";

const GridWrapper = props => {
  return (
    <Grid
      container
      style={{ paddingLeft: "8px", paddingRight: "8px", marginTop: "4px" }}
      spacing={3}
      alignContent="center"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12} md={6} justify="center">
        {props.children[0]}
      </Grid>
      <Grid item xs={12} md={6} justify="center">
        {props.children[1]}
      </Grid>
    </Grid>
  );
};

export default GridWrapper;
