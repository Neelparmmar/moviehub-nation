import React from "react";
import Party from "./assets/party.png";
import Fire from "./assets/fire.png";
import Stary from "./assets/stary.png";
import "./app.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList/MovieList";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList type="popular" title="popular" emoji={Fire} />
      <MovieList type="top_rated" title="top_rated" emoji={Stary} />
      <MovieList type="upcoming" title="upcoming" emoji={Party} />
    </div>
  );
};

export default App;
