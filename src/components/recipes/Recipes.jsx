import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './Recipes.css'
import add from '../../assets/images/recipes/01.png'

const Recipes = () => {

     const [recipetList, setRecipetList] = useState([]);

  
      useEffect(() => {
        fetch("recipes.json")
          .then((res) => res.json())
          .then((data) => setRecipetList(data));
      }, []);
    return (
        <div id="recipes" className="mb-24">

            <div className="container mx-auto py-4">
                <div className="recipesHeader flex flex-col items-center mb-5 pb-5">
                    <h3 className="my-5">Simple and tasty recipes</h3>
                    <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem sint fuga quas obcaecati veniam deserunt.</p>
                </div>
               
      
                 <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {recipetList.map((item, index) =>
                        item.isAd ? (

                            <div key={index} className="adCards flex items-center flex-col justify-center rounded-xl shadow-lg text-center">
                                <h2 className="text-lg mt-3    font-bold ">Dont forget to eat healthy food</h2>
                                <img src={add} alt="Ad" className="mx-auto " />
                                <a
                                    href="https://www.foodieland.com"
                                    className="text-grey-200 underline font-semibold   "
                                >
                                    www.foodieland.com
                                </a>
                            </div>

                        ) : (
                            <Recipe
                                key={index}
                                image={item.image}
                                title={item.title}
                                time={item.time}
                                category={item.foodCategory} 
                                isFavorite={item.isFavorite}    
                            />
                       
                        )
                    )}
                </div> 



            </div>
        </div>
    );
};

export default Recipes;