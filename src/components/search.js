import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./serach.css";
import SettingsIcon from "@material-ui/icons/Settings";

export default function BasicTextFields() {
  return (
    <div>
      <input className="field" type={Text} placeholder="Search" />

      <SettingsIcon
        color="disabled"
        style={{ fontSize: 69 }}
        className="seticon"
      />
    </div>
  );
}
