import React, { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[CARRITO] Agregar Compra':
            const existingProduct = state.find(compra => compra.id === action.payload.id && compra.size === action.payload.size);
            if (existingProduct) {
                return state.map(compra =>
                    compra.id === action.payload.id && compra.size === action.payload.size
                        ? { ...compra, quantity: compra.quantity + action.payload.quantity }
                        : compra
                );
            } else {
                return [...state, action.payload];
            }

        case '[CARRITO] Aumentar Cantidad Compra':
            return state.map(compra =>
                compra.id === action.payload.id && compra.size === action.payload.size
                    ? { ...compra, quantity: compra.quantity + 1 }
                    : compra
            );

        case '[CARRITO] Disminuir Cantidad Compra':
            return state.map(compra =>
                compra.id === action.payload.id && compra.size === action.payload.size && compra.quantity > 1
                    ? { ...compra, quantity: compra.quantity - 1 }
                    : compra
            );

        case '[CARRITO] Eliminar Compra':
            const productToRemove = state.find(compra => compra.id === action.payload.id && compra.size === action.payload.size);
            if (productToRemove && productToRemove.quantity > 1) {
                return state.map(compra =>
                    compra.id === action.payload.id && compra.size === action.payload.size
                        ? { ...compra, quantity: compra.quantity - 1 }
                        : compra
                );
            } else {
                return state.filter((compra) => compra.id !== action.payload.id || compra.size !== action.payload.size);
            }

        default:
            return state;
    }
};




export const CarritoProvider = ({ children }) => {
    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

    const agregarCompras = (compra) => {
        dispatch({
            type: '[CARRITO] Agregar Compra',
            payload: compra
        });
    };

    const aumentarCantidad = (id, size) => {
        dispatch({
            type: '[CARRITO] Aumentar Cantidad Compra',
            payload: { id, size }
        });
    };

    const disminuirCantidad = (id, size) => {
        dispatch({
            type: '[CARRITO] Disminuir Cantidad Compra',
            payload: { id, size }
        });
    };

    const eliminarCompras = (id, size) => {
        dispatch({
            type: '[CARRITO] Eliminar Compra',
            payload: { id, size }
        });
    };

    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompras, aumentarCantidad, disminuirCantidad, eliminarCompras }}>
            {children}
        </CarritoContext.Provider>
    );
};