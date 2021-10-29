import React from "react";
import { Grid, makeStyles, Typography, Button } from "@material-ui/core";

import llama from "../assets/llama-removebg.png";
import AppButton from "../utils/AppButton";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    marginLeft: 12,
    // marginTop: theme.spacing(20),
    borderRadius: 0,
    // width: 250,
    // fontSize: 24,
    fontWeight: "400",
  },
  heroText: {
    width: theme.spacing(40),
  },
  accent: {
    color: theme.palette.accent.main,
  },
  pitch: {
    width: theme.spacing(40),
    // marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  call: {
    display: "flex",
    alignItems: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" className={classes.root}>
      {/* small se aage */}
      <Grid item sm={6} style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

      }}>
        <Typography variant="h2" component="h5" className={classes.heroText}>
          Building Websites is now{" "}
          <span style={{ color: "#EE726F" }}>Easier</span>
        </Typography>
        <Typography variant="h5" className={classes.pitch}>
          Have you ever wondered, why after so many people learning{" "}
          <span className={classes.accent}>web-development</span> and yet so
          many <span className={classes.accent}>fail to be one</span>
        </Typography>
        <div className={classes.call}>
          <Typography variant="h5">
            <span className={classes.accent}>Wonder</span> how{" "}
            <span className={classes.accent}>you can be</span> better?
          </Typography>
          {/* <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 12 }}
          >
            Contact Us
          </Button> */}
          <AppButton className={classes.button}>Contact Us</AppButton>
        </div>
      </Grid>
      {/* <Grid item sm={5} justifyContent="center" alignItems="center">
      </Grid> */}
      <img
        src={llama}
        alt="llama"
        style={{ height: 620, width: 620, zIndex: 2 }}
      />
    </Grid>
  );
};

export default Home;
