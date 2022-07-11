import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News key="general" pageSize={5} category="general" />}
            ></Route>
            <Route
              path="/general"
              element={<News key="general" pageSize={5} category="general" />}
            ></Route>
            <Route
              path="/health"
              element={<News key="health" pageSize={5} category="health" />}
            ></Route>
            <Route
              path="/science"
              element={<News key="science" pageSize={5} category="science" />}
            ></Route>
            <Route
              path="/sports"
              element={<News key="sports" pageSize={5} category="sports" />}
            ></Route>
            <Route
              path="/technology"
              element={
                <News key="technology" pageSize={5} category="technology" />
              }
            ></Route>
            <Route
              path="/business"
              element={<News key="business" pageSize={5} category="business" />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
