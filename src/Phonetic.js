import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

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

      <br />
      {props.phonetic.text}
    </div>
  );
}
