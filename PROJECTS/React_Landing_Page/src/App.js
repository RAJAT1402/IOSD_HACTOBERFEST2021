import React from "react";
import MainNavigation from "./components/MainNavigation";
import Home from "./components/Home";

import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";



const theme = createTheme({
  palette: {
    primary: {
      main: "#D9FFFD",
    },
    secondary: {
      main: "#0671B7",
    },
    accent: {
      main: "#EE726F",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainNavigation />
      <Home />
      {/* <Testimonials /> */}
    </ThemeProvider>
  );
}

export default App;