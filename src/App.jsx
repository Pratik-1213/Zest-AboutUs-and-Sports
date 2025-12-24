import { Routes, Route, Link, Navigate } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Sports from './pages/Sports';

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        zIndex: 1000,
        padding: '20px', 
        display: 'flex', 
        gap: '40px', 
        justifyContent: 'center', 
        background: 'rgba(0,0,0,0.6)', // Semi-transparent dark background
        backdropFilter: 'blur(10px)', // Glassmorphism blur
        borderBottom: '1px solid rgba(255, 94, 0, 0.2)' // Subtle orange border
      }}>
        <Link to="/about" style={{ 
          color: '#FF5E00', // Zest Orange
          textDecoration: 'none', 
          fontSize: '1.5rem', 
          fontFamily: 'Teko, sans-serif', 
          fontWeight: '500',
          letterSpacing: '1px' 
        }}>
          ABOUT US
        </Link>
        
        <Link to="/sports" style={{ 
          color: '#FF5E00', 
          textDecoration: 'none', 
          fontSize: '1.5rem', 
          fontFamily: 'Teko, sans-serif', 
          fontWeight: '500',
          letterSpacing: '1px' 
        }}>
          SPORTS
        </Link>
      </nav>

      {/* Route Definitions */}
      <Routes>
        {/* REDIRECT: Automatically sends user to About page on load */}
        <Route path="/" element={<Navigate to="/about" replace />} />
        
        {/* Actual Pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </>
  );
}

export default App;