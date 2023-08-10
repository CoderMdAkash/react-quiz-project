import Classes from "../styles/Answer.module.css";
import Answer from "./Answer";

export default function Question({ answers = [] }) {
  return answers.map((answer, index) => (
    <div className={Classes.question} key={index}>
      <div className={Classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answer options={answer.options} input={false} />
    </div>
  ));
}
