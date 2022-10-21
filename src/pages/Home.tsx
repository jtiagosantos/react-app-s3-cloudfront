import { Link } from "react-router-dom";

import logo from './../logo.svg';

import './../app.css';

export const Home = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h2>React App deployed in AWS with S3 Bucket + CloudFront!🚀</h2>
        <Link to="/profile">Profile</Link>
      </header>
    </div>
  );
}