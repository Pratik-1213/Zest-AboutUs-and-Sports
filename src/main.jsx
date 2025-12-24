import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ADD THIS BASENAME PROP */}
    <BrowserRouter basename="/Zest-AboutUs-and-Sports">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)