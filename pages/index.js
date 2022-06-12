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
        <meta property="og:site_name" content="San Roque 2014 Pollos" />
        <meta property="og:title" content="San Roque 2014 Pollos" />
        <meta property="og:description" content="Programa de fiestas" />
        <meta
          property="og:image"
          itemprop="image"
          content="http://pollosweb.wesped.es/programa_pollos/play.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1440432930" />
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
