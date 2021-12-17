import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  const [play, setPlay] = useState(false);

  function handleClick() {
    setPlay(true);
  }

  return (
    <div className="phonetic">
      <button onClick={handleClick}>
        <i class="fa fa-volume-up" aria-hidden="true"></i>
      </button>
      {play && (
        <ReactAudioPlayer
          src={props.phonetic.audio}
          autoPlay
          onEnded={() => setPlay(false)}
        />
      )}

      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
