import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { GlobalStyle } from './styles/globalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>,
)
