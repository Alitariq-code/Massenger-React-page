import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import GifIcon from "@material-ui/icons/Gif";
import "./bottom.css";
import SendIcon from "@material-ui/icons/Send";

function Bottom() {
  return (
    <div className="bottom">
      <div className="iconss">
        <AddCircleIcon
          className="opo"
          style={{ fontSize: 64 }}
          color="primary"
        />
        <PhotoLibraryIcon
          className="opo"
          style={{ fontSize: 64 }}
          color="primary"
        />
        <EmojiEmotionsIcon
          className="opo"
          style={{ fontSize: 64 }}
          color="primary"
        />
        <GifIcon className="opo" style={{ fontSize: 64 }} color="primary" />
      </div>
      <input class="daba" type={Text} placeholder="Aa"></input>
    </div>
  );
}

export default Bottom;
