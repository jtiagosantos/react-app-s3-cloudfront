import { Link } from "react-router-dom";

import './../app.css';

export const Profile = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h2>
          Made with 💜 by <a href="https://github.com/jtiagosantos" target="_blank" rel="noreferrer">@jtiagosantos</a>
        </h2>
        <Link to="/">Home</Link>
      </header>
    </div>
  );
}