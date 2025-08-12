import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SecondPage from './second-page.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SecondPage/>
  </StrictMode>,
)
