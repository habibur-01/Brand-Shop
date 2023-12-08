import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandProduct = ({ product }) => {

    const { _id, image, name, brand, price, rating } = product
    return (
        <div>

            <div className="card card-side h-80 lg:h-96 bg-base-200 shadow-xl rounded-md">
                <div className="w-3/5">
                    <figure><img className="object-fill h-80 lg:h-96 rounded-md " src={image} alt="Movie" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Brand Name: {brand}</p>
                    <p>Price: ${price}</p>
                    <p>Ratings: {rating} out of 5</p>
                    <div className="card-actions justify-end">
                        
                        <Link to={`/productdetails/${_id}`}><button className="btn btn-primary">Watch</button></Link>
                        
                        <Link to={`/updateproduct/${_id}`}><button className="btn btn-primary">Update</button></Link>
                        

                    </div>
                </div>
            </div>

        </div>
    );
};
BrandProduct.propTypes = {
    product: PropTypes.object
}

export default BrandProduct;