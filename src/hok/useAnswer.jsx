import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswer(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswer() {
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + videoID + "/questions");
      const AnswerQuery = query(answerRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(AnswerQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setAnswers((prevAnswer) => {
            return [...prevAnswer, ...Object.values(snapshot.val())];
          });
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }

    fetchAnswer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoID]);

  return { loading, error, answers };
}
