import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import useSWR from "swr";
import VideoBox from "../../components/videoBox";
import Loader from "../../components/loader";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Video() {
  const dataContext = useContext(DataContext);
  const { id } = useParams();

  const { data, error, isLoading } = useSWR(
    `${dataContext.server}/videos/${id}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <Loader />;
  if (!data) return <div>no data available</div>;
  console.log(data);
  // render data
  return (
    <>
      <VideoBox
        video={data.videos.large.url}
        avatar={data.userImageURL}
        user={data.user}
        tags={data.tags}
        likes={data.likes}
        comments={data.comments}
        downloads={data.downloads}
        views={data.views}
      />
    </>
  );
}

export default Video;
