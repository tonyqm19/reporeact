import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import Cart from './pages/Cart/index.tsx';
import LibroDetallePage from './pages/LibroDetalle/index.tsx';
import { ShoppingCartProvider } from './context/index.tsx';


createRoot(document.getElementById('root')!).render(
    <ShoppingCartProvider>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/libro/:tipo/:codigo" element={<LibroDetallePage/>} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </BrowserRouter>
    </ShoppingCartProvider>
)
