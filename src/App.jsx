import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slides from "./slides/Slides";
import Sorting from "./sorting/Sorting";

import "./App.css";
import TodoList from "./todo/TodoList";
import FetchingData from "./fetchAPI/FetchingData";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slides />
                  <Sorting />
                  <TodoList />
                  <FetchingData />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
