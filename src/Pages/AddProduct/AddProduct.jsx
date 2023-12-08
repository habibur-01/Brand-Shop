import { useState } from "react";
import addbgpic from "../../assets/addproduct.jpg"
import { ToastContainer, toast } from "react-toastify";

const AddProduct = () => {
    const [brandType, setBrandType] = useState('')

    

    const handleAddProduct = e => {
        e.preventDefault()
        const image = e.target.image.value
        const name = e.target.name.value
        const brand = e.target.brand.value
        const price = e.target.price.value
        const type = brandType
        const description = e.target.shortdetails.value
        const rating = e.target.rating.value
        const product = {image, name, brand, price, type, description, rating}
        console.log(product)
       

        // send data to the server
        fetch(' https://assignment-10-server-2x2ylpsyh-habibur-01.vercel.app/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                return toast('Product Added Successfully')
            }
        })
    


    }
    const handleType = e => {
        setBrandType(e.target.value)
        console.log(e.target.value)
     }

    


    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="w-full flex justify-center items-center min-h-screen border bg-cover" style={{ backgroundImage: `url(${addbgpic})` }}>

                <div className="lg:border lg:w-3/6 backdrop-blur-lg bg-transparent rounded-lg lg:rounded-tl-[50px] rounded-br-[50px] p-10 my-32">
                    <form className="card-body" onSubmit={handleAddProduct}>
                        <div className="form-control">
                            <label className="label ">
                                <span className="text-white font-medium">Image</span>
                            </label>
                            <input type="text"  name="image" placeholder="img url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text text-white font-medium">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text text-white font-medium">Brand Name</span>
                            </label>
                            <input type="text" placeholder="brand name" name="brand" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Type</span>
                            </label>
                            <select className="px-4 py-3 rounded-lg"  onChange={handleType}>
                                <option value="Shoes">--</option>
                                <option value="Shoes">Shoes</option>
                                <option value="Bag">Bag</option>
                                <option value="Cloth">Cloth</option>
                                <option value="Socks">Socks</option>
                                <option value="Watch">Watch</option>
                                
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Price</span>
                            </label>
                            <input type="text" placeholder="price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Description</span>
                            </label>
                            <textarea type="text" placeholder="short description" name="shortdetails" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Rating</span>
                            </label>
                            <input type="number" placeholder="rating" name="rating" className="input input-bordered" required min="1" max="5" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Product</button>
                        </div>
                    </form>

                </div>
            </div>



        </div>
    );
};

export default AddProduct;