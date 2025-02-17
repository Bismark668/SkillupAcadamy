import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Componets/Dashboard";
import LandingPage from "./Componets/LandingPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;