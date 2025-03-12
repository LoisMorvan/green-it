import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GreenITPolicy from "./pages/GreenITPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/green-it-policy" element={<GreenITPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
