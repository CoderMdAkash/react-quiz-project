import Classes from "../styles/Answer.module.css";
import Answer from "./Answer";

export default function Question() {
  return (
    <>
      <div className={Classes.question}>
        <div className={Classes.qtitle}>
          <span className="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
        <Answer />
      </div>
    </>
  );
}
