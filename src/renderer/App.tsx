import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

import TitleBar from "./components/TitleBar";

import "./index.css";

const Navigation: React.FC = () => {
  return (
    <HashRouter>
      <TitleBar />
      <Routes>
        <Route />
      </Routes>
    </HashRouter>
  );
};

function render() {
  ReactDOM.render(<Navigation />, document.body);
}

render();
