import React, { Fragment } from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import SignUp from "./pages/registration/sign-up";
import Login from "./pages/registration/login";

function App() {
  return (
    <>
      <CssBaseline />
      <Fragment>
        <Login />
      </Fragment>
    </>
  );
}

export default App;
