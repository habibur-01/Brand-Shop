// import { useEffect, useState } from "react";
import PropTypes from 'prop-types'


const BestProduct = ({ data }) => {
    // const [jsonData, setJsonData] = useState(data);


    console.log(data)
    return (
        <div className='my-32'>
            <h1 className='text-3xl font-semibold mb-10'>Best Product For You</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    data?.slice(0, 3)?.map(bestProduct =>

                        <div key={bestProduct._id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={bestProduct.image} className="h-80 object-fill" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{bestProduct.name}</h2>
                                    <p className='font-medium'>Brand: {bestProduct.brand}</p>

                                </div>
                            </div>

                        </div>


                    )
                }

            </div>
        </div>
    );
};
BestProduct.propTypes = {
    data: PropTypes.array
}

export default BestProduct;