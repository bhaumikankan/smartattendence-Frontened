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
        <meta
          property="og:url"
          content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="When Great Minds Don’t Think Alike"
        />
        <meta
          property="og:description"
          content="How much does culture influence creative thinking?"
        />
        <meta
          property="og:image"
          content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
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
