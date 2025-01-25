import AboutKitchen from "../../components/AboutKitchen/AboutKitchen";
import Categories from "../../components/categories/Categories";
import Instagram from "../../components/Instagram/Instagram";
import Newsletter from "../../components/Newsletter/Newsletter";
import Recipes from "../../components/recipes/Recipes";
import SpecialRecipes from "../../components/specialRecipe/SpecialRecipes";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <>
       <Banner></Banner>
       <Categories />
       <Recipes />
       <AboutKitchen />
       <Instagram />
       <SpecialRecipes />
       <Newsletter />
        </>
    );
};

export default Home;