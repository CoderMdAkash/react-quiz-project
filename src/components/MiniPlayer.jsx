import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import Classes from "../styles/MiniPlayer.module.css";

// eslint-disable-next-line react/prop-types
export default function MiniPlayer({ title, id }) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toogleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(Classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(Classes.floatingBtn);
      setStatus(false);
    }
  }
  return (
    <>
      <div
        className={`${Classes.miniPlayer} ${Classes.floatingBtn}`}
        ref={buttonRef}
      >
        <span
          className={`material-icons-outlined ${Classes.open}`}
          onClick={toogleMiniPlayer}
        >
          play_circle_filled
        </span>
        <span
          className={`material-icons-outlined ${Classes.close}`}
          onClick={toogleMiniPlayer}
        >
          close
        </span>
        {/* <img src={image} alt="Mini Player" /> */}
        <ReactPlayer
          className={Classes.player}
          url={videoUrl}
          width="300px"
          height="168px"
          playing={status}
          controls
        />
        <p>{title}</p>
      </div>
    </>
  );
}
