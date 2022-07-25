import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  const setProgressTo = (setProgressTo) => {
    setProgress(setProgressTo);
  };

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgressTo}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                category="general"
              />
            }
          ></Route>
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgressTo}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                category="general"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgressTo}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                category="health"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgressTo}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                category="science"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgressTo}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgressTo}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                category="technology"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgressTo}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                category="business"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
