import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const GreenITPolicy = lazy(() => import("./pages/GreenITPolicy"));
const UploadImages = lazy(() => import("./pages/GestionImages"));

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Suspense fallback={<div>Chargement...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/green-it-policy" element={<GreenITPolicy />} />
            <Route path="/gestion-images" element={<UploadImages />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
