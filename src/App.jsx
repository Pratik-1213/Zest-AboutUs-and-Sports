import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Sports from './pages/Sports';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '20px', display: 'flex', gap: '20px', justifyContent: 'center', background: 'rgba(0,0,0,0.5)' }}>
        <Link to="/" style={{ color: 'var(--primary-orange)', textDecoration: 'none' }}>About Us</Link>
        <Link to="/sports" style={{ color: 'var(--primary-orange)', textDecoration: 'none' }}>Sports Page</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;