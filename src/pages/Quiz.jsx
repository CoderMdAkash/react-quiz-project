import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import Answer from "../components/Answer.jsx";
import MiniPlayer from "../components/MiniPlayer.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import useQuestions from "../hok/useQuestions.jsx";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      // eslint-disable-next-line no-case-declarations
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { loading, error, questions } = useQuestions(id);
  // eslint-disable-next-line no-unused-vars
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const { currentUser } = useAuth();

  const navigate = useNavigate();

  const { state } = useLocation();
  const { videoTitle } = state;

  // eslint-disable-next-line no-unused-vars
  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestions,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  function nextQuestion() {
    if (currentQuestions + 1 < questions.length) {
      setCurrentQuestions((prevCurrent) => prevCurrent + 1);
    }
  }
  function prevQuestion() {
    if (currentQuestions >= 1 && currentQuestions < questions.length) {
      setCurrentQuestions((prevCurrent) => prevCurrent - 1);
    }
  }

  const percentage =
    questions.length > 0
      ? ((currentQuestions + 1) / questions.length) * 100
      : 0;

  async function submit() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, {
      state: qna,
    });
  }

  return (
    <>
      {error && <div>There was an error!</div>}
      {loading && <div>Loading!</div>}
      {!loading && !error && qna && qna.length === 0 && (
        <p>No Question Found!</p>
      )}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestions].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answer
            input={true}
            options={qna[currentQuestions].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            progress={percentage}
            submit={submit}
          />
          <MiniPlayer id={id} title={videoTitle} />
        </>
      )}
    </>
  );
}
