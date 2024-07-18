import React, { useState, useContext } from 'react';
import CartButton from '../components/CartButton';
import { CarritoContext } from '../context/CarritoContext';

const PoloCuello = () => {
    const [added, setAdded] = useState(false);
    const { agregarCompras } = useContext(CarritoContext);

    const clickAgregar = () => {
        const talla = document.querySelector('select[name="inputState"]').value;
        const cantidad = parseInt(document.getElementById('cantidad').value);

        if (talla === 'Tallas') {
            alert('Por favor selecciona una talla antes de agregar al carrito');
            return;
        }

        agregarCompras({
            id: 'polo-cuello',
            name: 'POLO TIPO CUELLO',
            price: 25,
            size: talla,
            quantity: cantidad,
        });
        setAdded(true);
    };

    const clickQuitar = () => {
        eliminarCompras('polo-cuello');
        setAdded(false);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>CATÁLOGO DE PRODUCTO</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <h5>HOMBRE</h5>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-4 imagen-container">
                        <img src="/img/polo-tipo-cuello.jpg" className="img-fluid" alt="Imagen de producto" />
                    </div>

                    <div className="col-12 col-md-6 col-lg-8">
                        <div className="row">
                            <div className="col-12">
                                <h2>POLO TIPO CUELLO</h2>
                            </div>
                            <div className="col-12">
                                <h3>PEN 25.00</h3>
                            </div>
                            <div className="col-12">
                                <p>
                                    Polo confeccionado en tejido de algodón con estructura piqué. Cuello tipo polo y manga corta
                                    acabada en rib. Bajo con aberturas laterales. Cierre frontal con botones.
                                </p>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <select name="inputState" className="form-control" id="talla">
                                        <option defaultValue>Tallas</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <input type="number" className="form-control" id="cantidad" defaultValue="1" required />
                            </div>
                            <CartButton added={added} clickAgregar={clickAgregar} clickQuitar={clickQuitar} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PoloCuello;
