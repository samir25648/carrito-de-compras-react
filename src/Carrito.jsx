import React from 'react';
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import PoloEstructurado from "./pages/PoloEstructurado";
import { Compras } from "./pages/Compras";
import PoloCuello from "./pages/PoloCuello";
import PoloVerde from "./pages/PoloVerde";
import { Shop } from "./pages/Shop";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";

export const Carrito = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Compras />} />
                    <Route path="/polo-estructurado" element={<PoloEstructurado />} />
                    <Route path="/polo-cuello" element={<PoloCuello />} />
                    <Route path="/polo-verde" element={<PoloVerde />} />
                    <Route path="/carrito-compras" element={<Shop />} />
                </Routes>
            </CarritoProvider>
        </ProductosProvider>
    );
};
