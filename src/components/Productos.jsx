import { Link } from 'react-router-dom';

const Productos = ({ name, price, price2, img, details }) => {
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title text-center">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center"><del>{price}</del></h6>
                <p className="card-text text-center">{price2}</p>
                <Link to={details} className="btn btn-primary btn-block card-link">Ver detalle</Link>
            </div>
        </div>
    );
};

export default Productos;
