import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import loginbg from "../../assets/login.jpg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const {userSignIn, signInWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    // const {userLogin} = useContext(AuthContext)

    const handleUserData = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const user = { email, password }
        console.log(user)
        
        userSignIn(email, password)
        .then(result => {
            console.log(result.user)
            toast('Login Successfull')
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => {
            console.error(error.message)
            toast(error.message)
        })
       


        // fetch(' https://assignment-10-server-2x2ylpsyh-habibur-01.vercel.app/users', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(user),
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             return (toast('Users added successfully'))
        //         }
        //         console.log(data)
        //     })
    }


    // login with google
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : "/")
            toast('Login Successfull')
        })
        .catch(error => {
            console.error(error.message)
            toast(error.message)
        })

    }


    return (
        <div className="w-full flex justify-center items-center min-h-screen border bg-cover" style={{ backgroundImage: `url(${loginbg})` }}>
            <ToastContainer></ToastContainer>
            <div className="border lg:w-3/6 font-medium backdrop-blur-lg bg-transparent rounded-tl-[50px] rounded-br-[50px] p-10  ">
                <form className="card-body" onSubmit={handleUserData}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-base font-semibold text-center">or</p>
                <div className="flex justify-center flex-col  mt-6 px-10">
                    <div>
                        <button className="w-full btn btn-primary" onClick={handleGoogleSignIn}>Login with Gmail</button>
                    </div>

                    <p >Are you new here? Please <Link to="/registration"><span className="font-semibold text-white">Registration</span></Link></p>
                </div>
            </div>

        </div>
    );
};

export default Login;