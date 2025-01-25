/* eslint-disable react/prop-types */
const SpecialRecipe = ({ image, title, time, category, isFavorite }) => {
    return (
        <div className="mb-5">
            <div className="card h-[350px] w-full  bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                    <img src={image} alt={title} className="w-full h-48 object-cover" />
                    {isFavorite ? <button className="absolute w-8 rounded-full p-2 bg-[#FFFFFF] top-2 right-2 text-red-500">
                        <svg
                            className="w-[15px] h-[15px] fill-[#FF6363]"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
                        </svg>
                    </button> : <button className="absolute  w-8 rounded-full  bg-[#FFFFFF] p-2 top-2 right-2 text-red-500">
                    <svg
                            className="w-[15px] h-[15px] fill-[#DBE2E5]"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
                        </svg>
                    </button>}

                </div>
                <div className="p-4">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <div className="flex items-center justify-between my-2 text-gray-500 text-sm mt-2">
                        <span className="mr-4 flex items-center">
                            <svg
                                className="mr-1 w-[15px] h-[15px] fill-[#000000]"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z"></path>
                            </svg>{" "}
                            {time}
                        </span>
                        <span className="flex items-center">
                            <svg
                                className="mr-1 w-[15px] h-[15px] fill-[#000000]"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"></path>
                            </svg>{" "}
                            {category}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialRecipe;
