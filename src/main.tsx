import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { Index } from './routes/Index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
