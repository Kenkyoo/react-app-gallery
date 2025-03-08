import React from "react";
import useSWR from "swr";
import { useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import ImageGallery from "../../components/imageList";
import Loader from "../../components/loader";
import PaginationControlled from "../../navigation/pagination";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Images() {
  const dataContext = useContext(DataContext);
  const [page, setPage] = React.useState(1);
  const { data, error } = useSWR(
    `${dataContext.server}/images/trending?page=${page}`,
    fetcher
  );

  if (error) return <div>Error fetching users</div>;
  if (!data) return <Loader />;

  const handleChange = (event, value) => {
    setPage(page + 1);
  };

  return (
    <div>
      <ImageGallery itemData={data} header="Trending Images" />
      <PaginationControlled page={page} handleChange={handleChange} />
    </div>
  );
}
