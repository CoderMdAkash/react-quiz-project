import { useRef, useState } from "react";
import Button from "../components/Button.jsx";
import Classes from "../styles/ProgressBar.module.css";

// eslint-disable-next-line react/prop-types
export default function ProgressBar({ next, prev, progress, submit }) {
  const [tooltip, setToolTip] = useState(false);
  const tooltipRef = useRef();

  function toogleToolTip() {
    if (tooltip) {
      setToolTip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setToolTip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }
  return (
    <>
      <div className={Classes.progressBar}>
        <div className={Classes.backButton} onClick={prev}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={Classes.rangeArea}>
          <div className={Classes.tooltip} ref={tooltipRef}>
            {progress}% Cimplete!
          </div>
          <div className={Classes.rangeBody}>
            <div
              className={Classes.progress}
              style={{ width: `${progress}%` }}
              onMouseOver={toogleToolTip}
              onMouseLeave={toogleToolTip}
            ></div>
          </div>
        </div>
        <Button
          className={Classes.next}
          onClick={progress == 100 ? submit : next}
        >
          <span>{progress == 100 ? "submit" : "Next Question"}</span>
          {progress == 100 ? (
            ""
          ) : (
            <span className="material-icons-outlined"> arrow_forward </span>
          )}
        </Button>
      </div>
    </>
  );
}
