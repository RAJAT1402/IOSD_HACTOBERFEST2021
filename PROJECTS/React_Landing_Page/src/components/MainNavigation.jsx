// npm install @material-ui/core
import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-between", //horizontal spacing
  },
  logo: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center", //vertical spacing
  },
  links: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: theme.spacing(48),
  },
}));

const MainNavigation = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <div className={classes.logo}>
          <Typography>Website Company</Typography>
        </div>
        <div className={classes.links}>
          <Typography>Home</Typography>
          <Typography>Courses</Typography>
          <Typography>Connect</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
