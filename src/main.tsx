import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './osci'        // usa il nuovo file osci.tsx
import './style.css'            // lo stile (anche vuoto va bene)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
