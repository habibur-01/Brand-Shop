
import { NavLink } from 'react-router-dom';
import profilePic from "../../../assets/user-solid.svg"
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext)

    // const setDarkMode = () => {
    //     document.querySelector('body').setAttribute("data-theme", "dark")
    // }
    // const setlightMode = () => {
    //     document.querySelector('body').setAttribute("data-theme", "light")
    // }
    // const toogleTheme = (e) => {
    //     if(e.target.checked){
    //         setDarkMode()
    //     }
    //     else {
    //         setlightMode
    //     }
    // }


    const handleSignOut = () => {
        userSignOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error.message)
            })

    }

    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addproduct">Add Product</NavLink></li>
        <li><NavLink to="/mycart">My Cart</NavLink></li>

    </>
    return (
        <div className='absolute lg:w-3/4 p-3'>
            <div>
                <div className="navbar bg-transparent  lg:text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                {navlinks}
                            </ul>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-20 h-20 invisible md:visible' src="/logo1.png" alt="" />
                            <a className="btn btn-ghost normal-case text-xl invisible md:visible">GoodforNothing</a>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='mr-4 hover:cursor-pointer' >
                            <FaMoon></FaMoon>
                        </div>
                        <div className="dropdown dropdown-end items-center">

                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                {
                                    user ?
                                        <div className="w-10 rounded-full bg-white">
                                            <img className='' src={user.photoURL} />
                                        </div> :
                                        <div className="w-10 rounded-full bg-white">
                                            <img className='' src={profilePic} />
                                        </div>
                                }
                            </label>

                            {
                                user ? <>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                        <li>
                                            <a className="justify-between visible lg:invisible">
                                                {user?.displayName}
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li onClick={handleSignOut}><a>Logout</a></li>
                                    </ul>
                                </> :
                                    <>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                            <li>
                                                <a className="justify-between">
                                                    Profile
                                                    <span className="badge">New</span>
                                                </a>
                                            </li>
                                            <li><a>Settings</a></li>

                                        </ul>
                                    </>
                            }
                        </div>
                        {
                            user ? <p className='invisible lg:visible'>{user?.displayName?.split(' ')[0]}</p> :
                                <NavLink to="/login">
                                    <button className="ml-3 font-medium border p-1 rounded-md">Login</button>
                                </NavLink>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;