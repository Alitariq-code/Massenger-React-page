import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import BasicTextFields from "./components/search";
import "./grid.css";
import Service from "./components/service";
import Profile from "./components/profile";
import Content from "./components/body";
import Bottom from "./components/bottom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <div className="main">
      <BasicTextFields />
      <Service />
      <Profile />
      <Content />
      <Bottom />
    </div>
  );
}
