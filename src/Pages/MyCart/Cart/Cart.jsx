import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import PropTypes  from "prop-types";
import Swal from 'sweetalert2'


const Cart = ({ mycart, cart, setCart }) => {
    const { user } = useContext(AuthContext)
    const {_id, cartProductImage, cartProductBrand, cartProductName, cartProductPrice } = mycart;

     const handleDelete = (_id) => {
        console.log(_id)
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             
            fetch(` https://assignment-10-server-2x2ylpsyh-habibur-01.vercel.app/cart/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      const remaining = cart.filter(cartData => cartData._id !== _id)
                      setCart(remaining)

                }
            })
            }
          })
     }

    return (
        <div>
            {
                cart?.length!=0 ? <>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src={cartProductImage} className="h-[400px] w-[400px] object-fill" alt="Album" /></figure>
                        <div className="card-body w-3/6">
                            <h2 className="card-title">{cartProductName}</h2>
                            <p>Brand: {cartProductBrand}</p>
                            <p>Price: ${cartProductPrice}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-warning" onClick={() => handleDelete(_id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </>
                :
                ''
            }

        </div>
    );
};
Cart.propTypes = {
    mycart: PropTypes.object

}
Cart.propTypes = {
    cart: PropTypes.array

}
Cart.propTypes = {
    setCart: PropTypes.func.isRequired
    
    }



export default Cart;