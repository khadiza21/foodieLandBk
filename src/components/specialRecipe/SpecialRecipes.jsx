import { useEffect, useState } from "react";
import "./SpecialRecipe.css";
import Recipe from "../recipes/Recipe";
const SpecialRecipes = () => {
  const [specialRecipetList, setspecialRecipetList] = useState([]);

  useEffect(() => {
    fetch("specialRecipies.json")
      .then((res) => res.json())
      .then((data) => setspecialRecipetList(data));
  }, []);

  return (
    <div className="container ">
      <div className="specialRecipesHeader my-5 py-10 flex justify-between items-center gap-5">
        <h3>Try this delicious recipe to make your day</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
          laboriosam atque soluta ea maiores cum.
        </p>
      </div>
      <div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {specialRecipetList.map((item) => (
            <Recipe
              key={item.id}
              image={item.image}
              title={item.title}
              time={item.time}
              category={item.foodCategory}
              isFavorite={item.isFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialRecipes;
