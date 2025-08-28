import React from "react";
import Navbar from "../components/Navbar";

const directors = [
  { name: "Christopher Nolan", movies: ["Inception", "The Dark Knight"] },
  { name: "Steven Spielberg", movies: ["Jurassic Park", "E.T."] },
];

const Directors = () => {
  return (
    <div>
      {/* Navbar is rendered */}
      <Navbar />
      <h1>Directors page</h1>
      {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Directors;