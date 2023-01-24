import "./App.css";

import { useLocation } from "react-router-dom";

import { AnimatedRoutes } from "./components/AnimatedRoutes";

function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatedRoutes />
    </div>
  );
}

export default App;
