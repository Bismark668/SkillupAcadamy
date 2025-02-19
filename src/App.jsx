import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Componets/Dashboard";
import LandingPage from "./Componets/LandingPage";
import Signup from "./Componets/Signup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;