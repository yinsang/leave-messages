import React from 'react'
import App from './App'
import ReactDOMClient from 'react-dom/client';

const root = ReactDOMClient.createRoot(
  document.getElementById('root')
)

root.render(<App />)