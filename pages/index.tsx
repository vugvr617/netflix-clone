import Head from "next/head";
import Header from "../components/Header/Header";
import requests from "../services/requests";
import { IMovie } from "../interfaces/IData.d";
import Banner from "../components/Banner/Banner";
import MoviesRow from '../components/MoviesRow/MoviesRow';

interface IMainPage {
  netflixOriginals: Array<IMovie>;
}

export default function Home({ netflixOriginals }: IMainPage) {

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#141414]">
      <Head>
        <title>Home - Netflix</title>
      </Head>
      <div>
        <Header />
        <main>
          <Banner netflixOriginals={netflixOriginals} />
          <section>
            {/* <MoviesRow title="Trending Now"/>
            <MoviesRow title="Top Rated"/> */}
          </section>
        </main>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
