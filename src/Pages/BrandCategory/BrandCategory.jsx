import { useEffect, useState } from "react";
import Brand from "./Brand";


const BrandCategory = () => {
    const [brand, setBrand] = useState([])

    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => setBrand(data))
    })
    return (
        <>
            <div className="my-36 ">
                <div className="mb-24 text-center space-y-3">
                    <h1 className="text-4xl font-semibold">Choose Your Brand</h1>
                    <p className="w-3/5 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, accusantium expedita! Sapiente laboriosam quod quaerat animi perspiciatis? Cumque, obcaecati sit?</p>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        brand.map(brandName => <Brand key={brandName.id} brandName={brandName}></Brand>)
                    }

                </div>
            </div>
        </>
    );
};

export default BrandCategory;