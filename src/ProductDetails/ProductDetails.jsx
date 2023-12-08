import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../AuthProvider/AuthProvider";


const ProductDetails = () => {
    const {user} = useContext(AuthContext)
    // console.log(user.displayName)
    const selectedProduct = useLoaderData()
    const { image, name, brand, price, rating, description } = selectedProduct
    console.log(selectedProduct)

    const handleAddCart = () => {
        const userName = user.displayName
        const cartProductImage = image
        const cartProductPrice = price
        const cartProductBrand = brand
        const cartProductName = name
        const cartToProduct = { userName, cartProductImage, cartProductBrand, cartProductName, cartProductPrice }
        console.log(cartToProduct)

        // send data to the server
        fetch(` https://assignment-10-server-2x2ylpsyh-habibur-01.vercel.app/cart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartToProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    return toast('Product added to cart successfully')
                }
            })

    }

    return (
        <div>
            <div className="pt-32 bg-rose-300">
                <ToastContainer></ToastContainer>

                <div className="card card-side bg-base-200 shadow-xl rounded-md">
                    <div className="w-3/5">
                        <figure><img className="object-fill  h-[70vh] rounded-md " src={image} alt="Movie" /></figure>
                    </div>
                    <div className="p-10 mt-4 w-3/6 ">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold">{name}</h2>
                            <p className="text-xl font-medium">Brand Name: {brand}</p>
                            <p className="text-xl font-medium">Price: ${price}</p>
                            <p className="text-xl font-medium">Ratings: {rating} out of 5</p>
                        </div>
                        <div className="my-10">
                            <p className="text-base">Return Policy-</p>
                            <p><small>In retail, a product return is the process of a customer taking previously purchased merchandise back to the retailer, and in turn receiving a refund in the original form of payment, exchange for another item, or a store credit</small>
                            </p>
                            <ul>
                                <li className="list-disc ml-6"><small>Must be contact us within 72 hours after recieving product</small></li>
                            </ul>
                        </div>
                        <div className="card-actions justify-end">

                            <button className="btn btn-primary" onClick={handleAddCart}>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="my-24">
                <h1 className="text-3xl font-medium pb-2 border border-b-red-300 mb-6">Product Description</h1>
                <p className="p-2">{description}</p>
            </div>

        </div>
    );
};

export default ProductDetails;