import { useState } from "react";

const InstaPost = ({ post }) => {
    const {
        name,
        image1,
        image2,
        image3,
        address,
        latestReactUserName,
        totalReact,
        shortDescription,
        date,
    } = post;
    const [activeImage, setActiveImage] = useState(1);

    const images = [image1, image2, image3];

    const handleBulletClick = (index) => {
        setActiveImage(index + 1);
    };

    return (
        <div>
            <div className="card bg-base-100 shadow-xl relative">
                <div className="flex justify-between items-center ">
                    <div className="flex items-center gap-3 p-2 rounded">
                        <div>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                    <span className="text-xs ">FoodieLand</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="font-bold flex items-center gap-1">
                                {name}{" "}
                                <svg
                                    className="w-[15px] h-[15px] fill-[#0866FF]"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.3-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"></path>
                                </svg>
                            </p>
                            <p className="text-sm">{address}</p>
                        </div>
                    </div>

                    <div className="p-2">
                        <svg
                            className="w-[15px] h-[15px] fill-[#8e8e8e]"
                            viewBox="0 0 448 512"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path>
                        </svg>
                    </div>
                </div>

                <div className="absolute top-18 right-2 bg-gray-800 text-white text-sm px-2 py-1 rounded-lg">
                    {`${activeImage}/${images.length}`}
                </div>

                <div className="w-full h-64 overflow-hidden">
                    <img
                        src={images[activeImage - 1]}
                        alt={`Image ${activeImage}`}
                        className="w-full h-full object-cover transition-transform duration-300"
                    />
                </div>

                <div className="flex items-center justify-between p-2">
                    <div className="flex gap-2">
                        <svg className="w-[15px] h-[15px] fill-[#8e8e8e]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path>

                        </svg>
                        <svg className="w-[15px] h-[15px] fill-[#8e8e8e]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"></path>
                        </svg>
                        <svg className="w-[15px] h-[15px] fill-[#8e8e8e]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"></path>
                        </svg>
                    </div>
                    <div className="flex justify-center gap-2 pt-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleBulletClick(index)}
                                className={`w-2 h-2 rounded-full ${activeImage === index + 1
                                    ? "bg-cyan-500"
                                    : "bg-gray-400 hover:bg-gray-500"
                                    }`}
                            ></button>
                        ))}
                    </div>
                    <div>
                        <svg className="w-[15px] h-[15px] fill-[#8e8e8e]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"></path>
                        </svg>
                    </div>
                </div>

                <div className="card-body ps-5">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content w-4 rounded-full">
                                    <span className="text-xs  ">U</span>
                                </div>
                            </div>{" "}
                            {`Liked by ${latestReactUserName} and ${totalReact}`}
                        </span>
                    </div>
                    <p>
                        <span className="font-bold">{name}. </span>
                        {shortDescription}
                    </p>
                    <p className="text-sm text-gray-400">{date}</p>

                </div>
            </div>
        </div>
    );
};

export default InstaPost;
