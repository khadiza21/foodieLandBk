

const Recipe = ({ image, title, time, category }) => {
    return (
        <div>
            <div>
                <div className="card bg-white shadow-lg rounded-xl overflow-hidden">
                    <img src={image} alt={title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold">{title}</h3>
                        <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                            <span>{time} Minutes</span>
                            <span>{category}</span>
                        </div>
                    </div>
                    <div className="absolute top-2 right-2">
                        <button className="btn btn-circle btn-sm bg-red-500 hover:bg-red-600 text-white">
                            ❤
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;