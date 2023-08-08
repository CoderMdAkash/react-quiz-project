import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(12)
      );

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
          console.log("No videos found.");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }

    setTimeout(() => {
      fetchVideos();
    }, 1000);
  }, [page]);

  return { loading, error, videos, hasMore };
}
