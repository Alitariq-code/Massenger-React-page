import React from "react";
import "./profile.css";
import PersonIcon from "@material-ui/icons/Person";
import VideocamIcon from "@material-ui/icons/Videocam";
import CallIcon from "@material-ui/icons/Call";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Profile() {
  return (
    <div className="profile">
      <div className="det">
        <PersonIcon className="pro" color="disabled" style={{ fontSize: 69 }} />
        <h2 className="name">Nusrat Zahir Asha</h2>
        <div className="ali">
          <VideocamIcon
            style={{ fontSize: 50 }}
            className="video"
            color="primary"
          />
          <CallIcon style={{ fontSize: 50 }} color="primary" className="call" />
          <MoreVertIcon
            style={{ fontSize: 50 }}
            className="ver"
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
