import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import LibroDetallePage from './pages/LibroDetalle/index.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/libro/:codigo" element={<LibroDetallePage/>} />
        </Routes>
    </BrowserRouter>)
