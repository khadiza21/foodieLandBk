

import './Banner.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg from '../../../assets/images/bannerimg.jpeg';
const Banner = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "10%",
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "5%",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "2%",
                },
            },
        ],
    };


    const slides = [
        {
            id: 1,
            text: "Slide 1 Text",
            image:bannerImg,
        },
        {
            id: 2,
            text: "Slide 2 Text",
            image: bannerImg,
        },
        {
            id: 3,
            text: "Slide 3 Text",
            image: bannerImg,
        },
    ];

    return (
        <>
            <div className="w-full mb-24 container">
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="p-4">

                            <div className="flex items-center justify-between  rounded-lg overflow-hidden shadow-lg">
                              
                                <div className="p-6 w-1/2  bannerLeft">
                                    <h2 className="text-xl font-bold mb-4">{slide.text}</h2>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                        Learn More
                                    </button>
                                </div>
                               


                               
                                <div className="w-1/2">
                                    <img
                                        src={slide.image}
                                        alt={slide.text}
                                        className="w-auto h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Banner;