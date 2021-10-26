import { Button } from "@material-ui/core";
import React from "react";

function AppButton(props) {
  return (
    <Button variant="contained" color="secondary" disableElevation className={props.className}>
      {props.children}
    </Button>
  );
}

export default AppButton;
