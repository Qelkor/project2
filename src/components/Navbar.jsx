import React, { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-regular-svg-icons";


function NavBar() {
  return (
      <nav>
        <Link to="/Home">
          <img src="https://i.imgur.com/woHZhCw.png" alt="" />
        </Link>
        <Link to="/Films">Films</Link>
        <Link to="/Locations">Locations</Link>
        <Link to="/People">People</Link>
          <FontAwesomeIcon icon={faCirclePlay} className="Icon" />
          <FontAwesomeIcon icon={faCirclePause}  className="Icon" />
      </nav>
  );
}

export default NavBar;
