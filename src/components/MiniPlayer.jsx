import image from "../assets/images/3.jpg";
import Classes from "../styles/MiniPlayer.module.css";

export default function MiniPlayer() {
  return (
    <>
      <div className={`${Classes.miniPlayer} ${Classes.floatingBtn}`}>
        <span className={`material-icons-outlined ${Classes.open}`}>
          play_circle_filled
        </span>
        <span className={`material-icons-outlined ${Classes.close}`}>
          close
        </span>
        <img src={image} alt="Mini Player" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      </div>
    </>
  );
}
