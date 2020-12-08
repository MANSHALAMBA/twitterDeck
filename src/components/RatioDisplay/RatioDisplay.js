import React from "react";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const RatioDisplay = props => {
  return (
    <Container
      maxWidth="md"
      style={{ marginTop: "10px", border: "1px solid grey" }}
    >
      <CardContent>
        <Typography align="center" variant="h1">
          Ratio: {props.ratio}
        </Typography>
        <Typography align="left" variant="h6">
          Number of Followers: {props.foCount}
        </Typography>
        <Typography align="right" variant="h6">
          Number of Followings: {props.frCount}
        </Typography>
      </CardContent>
    </Container>
  );
};

export default RatioDisplay;
