import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProduct from "./BrandProduct/BrandProduct";
import sliderbg from '../../../assets/Adidas-bag.png'
import sliderbg1 from '../../../assets/at.jpg'
import sliderbg2 from '../../../assets/levi1.jpg'


const ViewBrandDetails = () => {
    const { brand } = useParams()
    const product = useLoaderData()
    const [item, setItem] = useState([])
    console.log(product)

    useEffect(() => {
        const findProduct = product.filter((queryProduct => queryProduct.brand === brand))
        setItem(findProduct)
        
    },[])
    console.log(item)

    return (
        <div >
            

            <div className="carousel w-full h-[70vh] pt-32 bg-red-300">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={sliderbg} className="w-full object-fill" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={sliderbg1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={sliderbg2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="mt-32 mb-10">
                <h1 className="text-4xl font-semibold">View Products</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-32">
                {
                    item.map(product => <BrandProduct key={product._id} product={product}></BrandProduct>)
                }
                
            </div>

        </div>
    );
};

export default ViewBrandDetails;