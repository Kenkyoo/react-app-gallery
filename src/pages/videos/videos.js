import React from "react";
import useSWR from "swr";
import { useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import VideoGallery from "../../components/videoList";
import Loader from "../../components/loader";
import PaginationControlled from "../../navigation/pagination";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Videos() {
  const dataContext = useContext(DataContext);
  const [page, setPage] = React.useState(1);
  const { data, error } = useSWR(
    `${dataContext.server}/videos/trending?page=${page}`,
    fetcher
  );

  if (error) return <div>Error fetching users</div>;
  if (!data) return <Loader />;

  const handleChange = (event, value) => {
    setPage(page + 1);
  };

  return (
    <div>
      <VideoGallery itemData={data} header="Trending Videos" />
      <PaginationControlled page={page} handleChange={handleChange} />
    </div>
  );
}
