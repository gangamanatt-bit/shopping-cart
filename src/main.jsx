import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './pulse.css'
import App from './App.jsx'
import cartStore from './pages/redux/cartStore.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={cartStore}><App /></Provider>
  </StrictMode>,
)
