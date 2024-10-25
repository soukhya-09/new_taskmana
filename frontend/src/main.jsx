import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes } from 'react-router-dom'
import RoutesApp from "./Routes"
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <RoutesApp />
    <ToastContainer/>
    </BrowserRouter>

)
