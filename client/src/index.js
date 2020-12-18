import ReactDOM from "react-dom";
import React from "react";
import "./styles/main.css";
import Header from "./components/Header";
import App from "./App";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
// import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
