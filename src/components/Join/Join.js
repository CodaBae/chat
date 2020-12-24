import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export default function SignIn(props) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState(props.match.params.id);

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Your Name</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
            Chat Now
          </button>
        </Link>
      </div>
    </div>
  );
}
