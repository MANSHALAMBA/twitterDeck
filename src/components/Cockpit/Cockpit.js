import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const Cockpit = props => {
  return (
    <Container maxWidth="sm" style={{ marginTop: "10px" }}>
      <TextField
        type="text"
        onChange={props.onChangeHandler}
        autoFocus
        fullWidth
        label="Screen Name"
        placeholder="Enter your Screen name"
        required
        size="medium"
        variant="outlined"
        color="secondary"
      />
      <br />
      <br />

      <Button
        color="secondary"
        fullWidth
        size="large"
        variant="contained"
        onClick={props.clickHandler}
      >
        Click Me !!
      </Button>
    </Container>
  );
};

export default Cockpit;
