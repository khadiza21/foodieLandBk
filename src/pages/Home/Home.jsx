import AboutKitchen from "../../components/categories/AboutKitchen/AboutKitchen";
import Categories from "../../components/categories/Categories";
import Newsletter from "../../components/Newsletter/Newsletter";
import Recipes from "../../components/recipes/Recipes";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <>
       <Banner></Banner>
       <Categories />
       <Recipes />
       <AboutKitchen />
       <Newsletter />
        </>
    );
};

export default Home;