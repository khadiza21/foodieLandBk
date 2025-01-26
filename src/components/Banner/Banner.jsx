import "./Banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg from "../../assets/images/bannerimg.jpeg";
import verified from "../../assets/images/Badge.png";
import userImg from "../../assets/images/Ellipse 2.png";
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
      text: "Spicy Delicious chicken wings ",
      image: bannerImg,
    },
    {
      id: 2,
      text: "Sweet Delicious chicken wings ",
      image: bannerImg,
    },
    {
      id: 3,
      text: "Sour Delicious chicken wings ",
      image: bannerImg,
    },
  ];

  return (
    <>
      <div className="w-full py-24 banner relative">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="py-4">
              <div className=" slideBox bg-[#e7fafe] flex items-center justify-between  rounded-lg overflow-hidden shadow-lg">
                <img
                  className="verfiedImg absolute top-10 md:top-70"
                  src={verified}
                  alt=""
                />

                <div className="p-6 w-1/2  bannerLeft">
                  <div className="badge flex items-center  py-4 rounded-full  my-5 bg-[#ffffff] gap-2">
                    <svg
                      className="w-[15px] h-[15px] fill-[#c4a07a]"
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"></path>
                    </svg>
                    <span> Hot Recipes</span>
                  </div>
                  <h2 className="text-xl font-bold mb-4">{slide.text}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Mollitia nobis odio officiis voluptates culpa voluptatibus
                    quas qui consequatur fuga fugiat?
                  </p>

                  <div className="flex badgeIconBox gap-5 my-5">
                    <div className="badgeIcon badge flex rounded-full py-4">
                      <svg
                        className="mr-1 w-[15px] p h-[15px] fill-[#000000]"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z"></path>
                      </svg>
                      30 Minutes
                    </div>

                    <div className="badgeIcon flex badge rounded-full py-4">
                      <svg
                        className="mr-1 w-[15px] p h-[15px] fill-[#000000]"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"></path>
                      </svg>
                      Chicken
                    </div>
                  </div>

                  <div className="flex heroBottom items-center justify-between">
                    <div className="flex items-center gap-3 p-2 rounded">
                      <div>
                        <div className="avatar placeholder">
                          <div className="-content w-10 rounded-full">
                            <img src={userImg} alt="" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="font-bold flex items-center gap-1">
                          Jhon Smith{" "}
                        </span>
                        <span className="text-sm">15 March 2022</span>
                      </div>
                    </div>

                    <button className="px-4 py-2 flex items-center  gap-2 bg-[#000000] text-white rounded-lg  hover:bg-slate-800 transition">
                      <span>Learn More </span>
                      <svg
                        className="w-[15px] h-[15px] fill-[#ffffff]"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* <img src={verified} className="border-5 mx-auto" alt="" /> */}

                <div className="w-1/2  h-full">
                  <img
                    src={slide.image}
                    alt={slide.text}
                    className="w-auto h-full object-cover"
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
