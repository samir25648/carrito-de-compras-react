import { ProductosContext } from "./ProductosContext"

export const ProductosProvider = ({children}) => {

    const products = [
        {
            name: 'POLO ESTRUCTURADO',
            price: 'PEN 25.00',
            price2: 'PEN 15.00',
            img: '/img/imagen-hombre.jpg',
            details: '/polo-estructurado'
        },
        {
            name: 'POLO TIPO CUELLO',
            price: 'PEN 45.00',
            price2: 'PEN 25.00',
            img: '/img/polo-tipo-cuello.jpg',
            details: '/polo-cuello'
        },
        {
            name: 'POLO VERDE',
            price: 'PEN 65.00',
            price2: 'PEN 45.00',
            img: '/img/polo-verde.jpg',
            details: '/polo-verde'
        }
    ];

  return (
    <ProductosContext.Provider value={{products}}>
      {children}
    </ProductosContext.Provider>
    )
}
