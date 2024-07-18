import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

export const Shop = () => {
    const { listaCompras, eliminarCompras } = useContext(CarritoContext);

    const handleEliminarCompra = (id, size) => {
        eliminarCompras(id, size);
    };


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col col-12 text-center">
                        <h1>CARRITO DE PRODUCTOS</h1>
                    </div>
                    <div className="col col-12 text-center">
                        <h5>COMPRAR</h5>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr className="alinear">
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Talla</th>
                                    <th>Cantidad</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody id="productTableBody">
                                {listaCompras.map((compra) => (
                                    <tr key={`${compra.id}-${compra.size}`}>
                                        <td>{compra.name}</td>
                                        <td>{compra.price}</td>
                                        <td>{compra.size}</td>
                                        <td>{compra.quantity}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => handleEliminarCompra(compra.id, compra.size)}
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
