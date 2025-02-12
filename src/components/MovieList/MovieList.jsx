import React, { useEffect, useState } from "react";
import _ from "lodash";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";
import { FaSearch } from "react-icons/fa"; // Import the search icon

const MovieList = ({ type, title, emoji }) => {
  const [movies, setMovies] = useState([]);
  const [minrating, setminrating] = useState(0);
  const [filteredMovies, setfilteredMovies] = useState([]);
  const [sort, setsort] = useState({
    by: "default",
    order: "asc",
  });
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term

  useEffect(() => {
    fetchMovie();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sorted = _.orderBy(filteredMovies, [sort.by], [sort.order]);
      setfilteredMovies(sorted);
    }
  }, [sort]);

  useEffect(() => {
    filterMovies();
  }, [searchTerm, minrating]); // Add searchTerm and minrating to dependency array

  const fetchMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=9c8d147c62608f4701d19f75c3f76e91`
    );
    const data = await response.json();
    setMovies(data.results);
    setfilteredMovies(data.results); // Initialize filteredMovies with the full movie list
  };

  const filterMovies = () => {
    let filtered = movies.filter((movie) =>
      movie.original_title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (minrating > 0) {
      filtered = filtered.filter((movie) => movie.vote_average >= minrating);
    }
    setfilteredMovies(filtered);
  };

  const handleFilter = (rate) => {
    if (rate === minrating) {
      setminrating(0);
    } else {
      setminrating(rate);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setsort((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="movie-list" id={type}>
      <header className="align-flex movie-list-header">
        <h2 className="align-flex movie-list-heading">
          {title}
          <img src={emoji} alt={`${emoji} icon`} className="navbar-emoji" />
        </h2>

        <div className="movie-list-fs align-flex">
          <FilterGroup
            minrating={minrating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />
          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie-sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie-sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <div className="search-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search movies"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="search-icon" />
          </div>
        </div>
      </header>

      <div className="movie-card">
        {/* Conditionally render the movie cards or no movies message */}
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <div className="notavailableMovie">
            <h2 className="text-not">
              No movies available for {minrating}+ stars
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieList;
