import React, { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Totoro from "../media/totoro.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
} from "@fortawesome/free-regular-svg-icons";

function NavBar() {
  const [playing, setPlaying] = useState(false);
  const audioPlayer = useRef();

  const toggle = () => {
    const prevValue = playing;
    setPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  return (
    <nav>
      <Link to="/Home">
        <img src="https://i.imgur.com/oOXszW5.png" alt="" />
      </Link>
      <Link to="/Films">Films</Link>
      <Link to="/Locations">Locations</Link>
      <Link to="/People">People</Link>
      <audio ref={audioPlayer} src={Totoro} />
      <button className="Icon" onClick={toggle}>
        {playing ? (
          <FontAwesomeIcon icon={faCirclePlay} />
        ) : (
          <FontAwesomeIcon icon={faCirclePause} />
        )}
      </button>
    </nav>
  );
}

export default NavBar;
