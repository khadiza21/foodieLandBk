import AboutKitchen from "../../components/categories/AboutKitchen/AboutKitchen";
import Categories from "../../components/categories/Categories";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <>
       <Banner></Banner>
       <Categories></Categories>
       <AboutKitchen />
        </>
    );
};

export default Home;