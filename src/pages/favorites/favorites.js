import * as React from "react";
import { useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import useSWR from "swr";
import { useAuth } from "../../context/authProvider";
import Loader from "../../components/loader";
import FavoritesImageList from "./imageFavorites";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Favorites() {
  const dataContext = useContext(DataContext);
  const { user } = useAuth();
  const userId = user ? user.uid : null;
  const userName = user ? user.displayName : null;

  const { data, error, isLoading } = useSWR(
    userId ? `${dataContext.server}/prisma/favorites/${userId}` : null,
    fetcher
  );

  if (!user) return <h4>Necesitas inciar sesion para ver tus favoritos</h4>;
  if (error) return <div>failed to load</div>;
  if (isLoading) return <Loader />;
  if (!data) return <div>no data available</div>;

  console.log(data);

  return (
    <div>
      <h2>{userName}</h2>
      <FavoritesImageList itemData={data} header={"Your Favorites"} />
    </div>
  );
}
