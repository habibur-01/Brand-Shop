import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared Comp/Navbar/Navbar";


const Root = () => {
    return (
        <div className="w-[95%] lg:w-3/4 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;