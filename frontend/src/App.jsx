import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatedRoutes } from "./components/AnimatedRoutes";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatedRoutes />
    </div>
  );
}

export default App;
