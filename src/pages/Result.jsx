import _ from "lodash";
import { useLocation, useParams } from "react-router";
import Analysis from "../components/Analysis.jsx";
import Question from "../components/Question.jsx";
import Summery from "../components/Summery.jsx";
import useAnswer from "../hok/useAnswer.jsx";

export default function Result() {
  const { id } = useParams();
  const { state } = useLocation();
  const qna = state;

  const { loading, error, answers } = useAnswer(id);

  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }

  const userScore = calculate();

  return (
    <>
      {error && <div>There was an error!</div>}
      {loading && <div>Loading!</div>}
      {!loading && !error && answers && answers.length === 0 && (
        <p>No Result Found!</p>
      )}
      {!loading && !error && answers && answers.length > 0 && (
        <>
          <Summery score={userScore} noq={answers.length} />
          <Analysis />
          <Question />
        </>
      )}
    </>
  );
}
