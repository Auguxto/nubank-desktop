import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

import LoadingScreen from "./screens/Loading";
import HomeScreen from "./screens/Home";

import TitleBar from "./components/TitleBar";

import "./index.css";

const Navigation: React.FC = () => {
  return (
    <HashRouter>
      <TitleBar />
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </HashRouter>
  );
};

function render() {
  ReactDOM.render(<Navigation />, document.body);
}

render();
