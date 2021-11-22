import { AnimeCollectionItem } from "./components/AnimeCollectionItem";
import { fetchTop } from "../model/JikanAPI";
import { useEffect, useState } from "react";

function App() {

  const [animeList, setAnimeList] = useState([])

  useEffect(() => {
    getAnime()
  }, [])

  async function getAnime() {
    console.log("Fetch AGain")
    const dataList = await fetchTop(1)
    setAnimeList(dataList)
  }

  return (
    <div className="container mx-auto justify-center">
      <h1> Top Anime </h1>
      <div className="grid lg:grid-cols-6 gap-6 md:grid-cols-4 sm:grid-cols-2">
        {animeList.map(anime => {
          return <AnimeCollectionItem anime={anime} />
        })}
      </div>
    </div>
  );
}

export default App;
