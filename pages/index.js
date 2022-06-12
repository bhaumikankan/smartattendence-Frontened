import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as geometry from "spherical-geometry-js";
import Pornsearch from "pornsearch";

export default function Home() {
  const [search, setSearch] = useState("");

  const handelSearch = () => {
    const Searcher = new Pornsearch(search, (driver = "xvideos"));

    Searcher.videos().then((videos) => console.log(videos));
  };

  return (
    <div>
      <Head>
        <meta property="og:title" content="The Rock" />
        <meta property="og:type" content="video.movie" />
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        <meta
          property="og:image"
          content="https://ia.media-imdb.com/images/rock.jpg"
        />
      </Head>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handelSearch}>Search</button>
    </div>
  );
}
