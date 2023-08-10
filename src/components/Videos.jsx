import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import Video from "../components/Video";
import useVideoList from "../hok/useVideoList";

export default function Videos() {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <>
      <div>
        {videos.length > 0 && (
          <InfiniteScroll
            dataLength={videos.length}
            hasMore={hasMore}
            next={() => setPage(page + 12)}
            loader={
              <div style={{ textAlign: "center", paddingTop: "50px" }}>
                <h3>Loading...</h3>
              </div>
            }
            endMessage={
              <div style={{ textAlign: "center", paddingTop: "130px" }}>
                No More Data!
              </div>
            }
          >
            {videos.map((video) => (
              <Link
                to={`/quiz/${video.youtubeID}`}
                state={{ videoTitle: video.title }}
                key={video.youtubeID}
              >
                <Video
                  title={video.title}
                  noq={video.noq}
                  id={video.youtubeID}
                />
              </Link>
            ))}
          </InfiniteScroll>
        )}
        {!loading && videos.length === 0 && <div>No Data Found!</div>}
        {error && <div>There was an error!</div>}
        {loading && <div>Loading!</div>}
      </div>
    </>
  );
}
