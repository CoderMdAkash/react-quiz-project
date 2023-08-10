import Classes from "../styles/Analysis.module.css";

// eslint-disable-next-line react/prop-types
export default function Analysis({ noq, answer }) {
  return (
    <>
      <div className={Classes.analysis}>
        <h1>Question Analysis</h1>
        <h4>
          You answerd {answer} out of {noq} questions correctly
        </h4>
      </div>
    </>
  );
}
