import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog"; // Import Blog page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/Blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
