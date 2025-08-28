import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const movies = [
  { id: 1, title: "Vilgax", time: "1hr 30mins", genre: "Scifi" },
  { id: 2, title: "The Dark Knight", time: "2hrs 30mins", genre: "Action" },
];

const Movie = () => {
  const { id } = useParams();
  const movie = movies.find((m) => movie.id === id);

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div>
      <Navbar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genre.map((genre, index) => (
        <span key={index}>{genre} </span>
      ))}
    </div>
  );
};

export default Movie;