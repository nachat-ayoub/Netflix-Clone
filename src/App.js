import "./App.css";
import Banner from "./components/js/Banner";
import Nav from "./components/js/Nav";
import Row from "./components/js/Row";
import Footer from "./components/js/Footer";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        fetchUrl={requests.fetchNetflixOriginals}
        title={"Netflix Originals"}
        isLargeRow
      />
      <Row title={"Trending"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
