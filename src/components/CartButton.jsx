import React from 'react';

const CartButton = ({ clickAgregar }) => {
    return (
        <div className="col-12 mt-5">
            <button 
                type='button' 
                className='btn btn-primary btn-block' 
                id="addToCartBtn"
                onClick={clickAgregar}
            >
                Agregar Carrito
            </button>
        </div>
    );
};

export default CartButton;
