import AboutKitchen from "../../components/AboutKitchen/AboutKitchen";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/categories/Categories";
import Instagram from "../../components/Instagram/Instagram";
import Newsletter from "../../components/Newsletter/Newsletter";
import Recipes from "../../components/recipes/Recipes";
import SpecialRecipes from "../../components/specialRecipe/SpecialRecipes";


const Home = () => {
    return (
        <>
       <Banner />
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