import React from "react";
import { Link, Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/directors">Directors</Link>
          </li>
          <li>
            <Link to="/actors">Actors</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default App;