
import { useState } from 'react';
import './Categories.css'
import { useEffect } from 'react';

const Categories = () => {

    const [categories, setcategories] = useState([]);

    useEffect(() => {
        fetch("categoris.json")
            .then((res) => res.json())
            .then((data) => setcategories(data));
    }, []);

    return (
        <>
            <section className='container'>
                <div className='categories mb-24'>
                    <header className='w-full flex justify-between items-center categoriesHeader'><h3>Categories</h3> <button className="btn">View All Categories</button></header>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 categoryBox my-[40px]">

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
                </div>
            </section>
        </>

    );
};

export default Categories;