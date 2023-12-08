import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ brandName }) => {
    const { brand, brand_image } = brandName;

    return (
        <div>

            <Link to={`/viewbranddetails/${brand}`}>
                <div className="card w-96  bg-base-300 shadow-xl">
                    <figure><img className='w-full h-64' src={brand_image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{brand}</h2>

                    </div>
                </div>
            </Link>

        </div>
    );
};
Brand.propTypes = {
    brandName: PropTypes.object

}

export default Brand;