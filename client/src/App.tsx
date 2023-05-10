import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Account from "./components/Account";
import Register from "./components/Register";
import DetailsPages from "./components/DetailsPages";
import Create from "./components/Create";

interface AppProps {}

const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/post/:id">Details Pages</Link>
            </li>
            <li>
              <Link to="/post">Create</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post/:id" element={<DetailsPages />} />
          <Route path="/post" element={<Create />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
