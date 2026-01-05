import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import LegalPage from './pages/LegalPage';
import './styles/index.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:serviceId" element={<ServiceDetail />} />
            <Route path="/legal" element={<LegalPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
