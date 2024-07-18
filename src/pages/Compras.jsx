import React, { useContext } from 'react'
import Productos from '../components/Productos';
import { ProductosContext } from '../context/ProductosContext';

export const Compras = () => {

    const {products} = useContext(ProductosContext);

    

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>CATÁLOGO DE PRODUCTOS</h1>
                    </div>
                    <div className="col-12 text-center">
                        <h5>HOMBRE</h5>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container">
                <div className="row">
                    {products.map((producto, index) => (
                        <div className="col-12 col-sm-6 col-lg-4">
                            <Productos
                                key={index}
                                name={producto.name}
                                price={producto.price}
                                price2={producto.price2}
                                img={producto.img}
                                details={producto.details}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

