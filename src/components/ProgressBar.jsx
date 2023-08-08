import Button from "../components/Button.jsx";
import Classes from "../styles/ProgressBar.module.css";

// eslint-disable-next-line react/prop-types
export default function ProgressBar({ next, prev, progress }) {
  return (
    <>
      <div className={Classes.progressBar}>
        <div className={Classes.backButton} onClick={prev}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={Classes.rangeArea}>
          <div className={Classes.tooltip}>{progress}% Cimplete!</div>
          <div className={Classes.rangeBody}>
            <div
              className={Classes.progress}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <Button className={Classes.next} onClick={next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </div>
    </>
  );
}
