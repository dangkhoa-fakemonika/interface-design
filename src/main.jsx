import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
// Remove strict mode to not render twice
  <StrictMode>
    <App />
  </StrictMode>,
)
