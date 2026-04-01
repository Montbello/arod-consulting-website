import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import LeistungenPage from './pages/LeistungenPage';
import FoerderungPage from './pages/FoerderungPage';
import ProjektePage from './pages/ProjektePage';
import KontaktPage from './pages/KontaktPage';
import IntakePage from './pages/IntakePage';
import UeberMichPage from './pages/UeberMichPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#080c14] text-[#f0f4ff]">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leistungen" element={<LeistungenPage />} />
          <Route path="/foerderung" element={<FoerderungPage />} />
          <Route path="/projekte" element={<ProjektePage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/intake" element={<IntakePage />} />
          <Route path="/ueber-mich" element={<UeberMichPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}