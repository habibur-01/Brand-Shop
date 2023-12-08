// import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import BrandCategory from "../BrandCategory/BrandCategory";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BestProduct from "./BestProduct/BestProduct";
import ChooseUs from "./ChooseUs/ChooseUs";



const Home = () => {
    // const users = useLoaderData()
    const{data} = useContext(AuthContext)

    return (
        <div>
            <Banner></Banner>
            <BestProduct data={data}></BestProduct>
            <BrandCategory></BrandCategory>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;