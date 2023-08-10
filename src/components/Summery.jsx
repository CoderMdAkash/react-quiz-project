import { useMemo } from "react";
import image from "../assets/images/success.png";
import useFetch from "../hok/useFetch";
import Classes from "../styles/Summery.module.css";

// eslint-disable-next-line react/prop-types
export default function Summery({ score, noq }) {
  const pexels_key = "pmHNIAHMICds62Rr4mWvuW3QJRZoCOhbWYrE0cZemh3pB1D8bvVGBFvV";

  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: pexels_key,
    }
  );

  const image1 = result ? result?.photos[0].src.medium : image;
  return (
    <>
      <div className={Classes.summary}>
        <div className={Classes.point}>
          <p className={Classes.score}>
            Your score is <br />
            {score} out of {noq * 5}
          </p>
        </div>
        {loading && <div className={Classes.badge}>Loading Your Badge...</div>}
        {error && <div className={Classes.badge}>An Error Occured!</div>}
        {!loading && !error && (
          <div className={Classes.badge}>
            <img src={image1} alt="Image" />
          </div>
        )}
      </div>
    </>
  );
}
