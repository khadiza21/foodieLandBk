
import './Categories.css'

const Categories = () => {


    const categories = [
        {
            id: 1,
            image: "../src/assets/images/categories/image 25.png",
            name: "Breakfast",
            gradient: "180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%"
        },
        {
            id: 2,
            image: "../src/assets/images/categories/Group 879.png",
            name: "Vegan",
            gradient: "180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%"
        },
        {
            id: 3,
            image: "../src/assets/images/categories/image 21.png",
            name: "Meat",
            gradient: "180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%"
        },
        {
            id: 4,
            image: "../src/assets/images/categories/image 22.png",
            name: "Dessert",
            gradient: "180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%"
        },
        {
            id: 5,
            image: "../src/assets/images/categories/image 23.png",
            name: "Lunch",
            gradient: "180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%"
        },
        {
            id: 6,
            image: "../src/assets/images/categories/image 24.png",
            name: "Chocolate",
            gradient: "180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%"
        }
    ]


    return (
        <>

            <section className='categories mb-24'>
                <header className='w-full flex justify-between items-center categoriesHeader'><h3>Categories</h3> <button className="btn">View All Categories</button></header>


                <div className="grid grid-flow-col justify-between gap-5 categoryBox my-[40px]">

                    {categories.map((category) => (
                        <div key={category.id} className="p-4 bg-gray-100 rounded shadow  flex items-center justify-evenly flex-col category cursor-pointer"
                            style={{
                                background: `linear-gradient(${category.gradient})`,
                            }}
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-32 object-cover rounded  "
                            />
                            <p className="text-lg font-semibold">{category.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>

    );
};

export default Categories;