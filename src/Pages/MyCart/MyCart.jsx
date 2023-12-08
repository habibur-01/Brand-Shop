import { useLoaderData } from "react-router-dom";
import Cart from "./Cart/Cart";
import { FaShoppingCart } from 'react-icons/fa';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const MyCart = () => {
    const{user} = useContext(AuthContext)
    const userName = user.displayName
    // console.log(userName)
    const cartProduct = useLoaderData()
    console.log (cartProduct)
    const [cart, setCart] = useState([])
    useEffect( ()=> {
        const myProduct=cartProduct.filter( product => product.userName == userName)
        setCart(myProduct)
    
},[cartProduct, userName])
console.log(cart)

    return (
        <div >
            <div className="pt-32 bg-rose-300 rounded-b-md">

            </div>
            <div className="text-right">
                
                {/* <p>{cart.map=(c) => console.log(c)}</p> */}
                <h1 className="tex-4xl font-semibold mt-20  mb-10 text-right border inline-flex gap-2 items-center p-2"><FaShoppingCart></FaShoppingCart>My Cart</h1>
            </div>
            <div className="mb-32">
                {
                    // <Cart cart={cart} setCart={setCart}></Cart>
                   cart?.length > 0 ? <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-32">
                    {
                         cart?.map(myCart =>
                            <Cart key={myCart._id} mycart={myCart} cart={cart} setCart={setCart}></Cart>
                        )
                    }
                   </div> : <p className="text-3xl font-medium text-center mt-20">You do not add anything!</p>
                }
            </div>

        </div>
    );
};

export default MyCart;