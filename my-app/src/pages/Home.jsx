import React from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

const movies = [
  { id: 1, title: "Vilgax" },
  { id: 2, title: "The Dark Knight" },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;