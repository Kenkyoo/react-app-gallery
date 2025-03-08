import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import useSWR from "swr";
import ImageBox from "../../components/imabeBox";
import Loader from "../../components/loader";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Image() {
  const dataContext = useContext(DataContext);
  const { id } = useParams();

  const { data, error, isLoading } = useSWR(
    `${dataContext.server}/images/${id}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <Loader />;
  if (!data) return <div>no data available</div>;
  console.log(data);
  // render data
  return (
    <>
      <ImageBox
        image={data.largeImageURL}
        avatar={data.userImageURL}
        user={data.user}
        tags={data.tags}
        likes={data.likes}
        comments={data.comments}
        downloads={data.downloads}
        views={data.views}
        item={data}
      />
    </>
  );
}

export default Image;
