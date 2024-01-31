import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./App.css";

function App() {
  return (
      <Route path="*" component={HomePage} />
  );
}

export default App;
