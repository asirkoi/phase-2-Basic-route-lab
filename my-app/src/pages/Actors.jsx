import React from "react";
import NavBar from "../components/Navbar";

const actors = [
  { name: "Leonardo DiCaprio", movies: ["Inception", "Titanic"] },
  {
    name: "Matthew McConaughey",
    movies: ["Interstellar", "Dallas Buyers Club"],
  },
];

const Actors = () => {
  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <article key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Actors;