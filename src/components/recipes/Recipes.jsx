import Recipe from "./Recipe";
import './Recipes.css'


const Recipes = () => {

    const recipes = [
        {
            id: 1,
            image: "../../../src/assets/images/recipes/1.png",
            name: "Big and Juicy Wagyu Beef Cheeseburger",
            time: 30,
            foodCategory: "Snack",
            isFavorite: 1,

        },
        {
            id: 2,
            image: "../../../src/assets/images/recipes/2.png",
            name: "Fresh Lime Roasted Salmon with Ginger Sauce",
            time: 30,
            foodCategory: "Fish",
            isFavorite: 1,

        },
        {
            id: 3,
            image: "../../../src/assets/images/recipes/3.png",
            name: "Strawberry Oatmeal Pancake with Honey Syrup",
            time: 30,
            foodCategory: "Breakfast",
            isFavorite: 0,

        },
        {
            id: 4,
            image: "../../../src/assets/images/recipes/4.png",
            name: "Fresh and Healthy Mixed Mayonnaise Salad",
            time: 30,
            foodCategory: "Healthy",
            isFavorite: 1,

        },
        {
            id: 5,
            image: "../../../src/assets/images/recipes/5.png",
            name: "Chicken Meatballs with Cream Cheese",
            time: 30,
            foodCategory: "Meat",
            isFavorite: 0,

        },
        {
            isAd: true,

        },
        {
            id: 6,
            image: "../../../src/assets/images/recipes/6.png",
            name: "Fruity Pancake with Orange & Blueberry",
            time: 30,
            foodCategory: "Sweet",
            isFavorite: 0,

        },
        {
            id: 7,
            image: "../../../src/assets/images/recipes/7.png",
            name: "The Best Easy One Pot Chicken and Rice",
            time: 30,
            foodCategory: "Snack",
            isFavorite: 0,

        },
        {
            id: 8,
            image: "../../../src/assets/images/recipes/8.png",
            name: "The Creamiest Creamy Chicken and Bacon Pasta",
            time: 30,
            foodCategory: "Noodles",
            isFavorite: 0,

        },
    ]
    return (
        <div id="recipes" className="mb-24">

            <div className="container mx-auto py-4">
                <div className="recipesHeader flex flex-col items-center mb-5 pb-5">
                    <h3 className="my-5">Simple and tasty recipes</h3>
                    <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem sint fuga quas obcaecati veniam deserunt.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {recipes.map((item, index) =>
                        item.isAd ? (

                            <div key={index} className="bg-green-100 p-6 rounded-xl shadow-lg text-center">
                                <h2 className="text-lg font-bold mb-4">Dont forget to eat healthy food</h2>
                                <img src="https://via.placeholder.com/100" alt="Ad" className="mx-auto mb-4" />
                                <a
                                    href="https://www.foodieland.com"
                                    className="text-blue-500 underline font-semibold"
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
                                category={item.category}
                            />
                        )
                    )}
                </div>



            </div>
        </div>
    );
};

export default Recipes;