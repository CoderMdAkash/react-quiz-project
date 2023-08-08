import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const QuizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(QuizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuestion) => {
            return [...prevQuestion, ...Object.values(snapshot.val())];
          });
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return { loading, error, questions };
}
