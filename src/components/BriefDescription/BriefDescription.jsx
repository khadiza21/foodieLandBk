import verfiedLogo from "../../assets/images/Badge.png";
import "./BriefDescription.css";
import homepageView1 from "../../assets/images/ss1.jpeg";
import homepageView2 from "../../assets/images/ss2.jpeg";
import homepageView3 from "../../assets/images/ss3.jpeg";
import homepageView4 from "../../assets/images/ss4.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
const BriefDescription = () => {
  return (
    <div>
      <section className="bg-gray-100 text-gray-800 py-12 md:py-16">
        <div className="container">
          <div className="  flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src={verfiedLogo}
                alt="Company Logo"
                className="w-20 h-20 md:w-28 md:h-28 object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold">
                Welcome to Our App
              </h1>
              <p className="text-lg md:text-xl mt-3 text-gray-600">
                Simplify your tasks and elevate your productivity with our
                innovative tools and solutions.
              </p>
              <p className="text-md mt-2 text-gray-500">
                Join thousands of happy users making their lives easier every
                day.
              </p>
              <button className="mt-6 px-6 py-3 bg-[#000000] text-white rounded-lg hover:bg-[#00bcd4] transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center mb-10 mt-20 py-6">
            <div className="xl:w-1/2 py-4">
              <h1 className="text-3xl font-bold text-center xl:text-left mb-4">
                FoodieLand
              </h1>

              <p className="text-center xl:text-left text-gray-600 mb-6">
                A sleek, modern e-commerce platform that streamlines online
                shopping, featuring intuitive navigation. Contain Components
                Home and About pages .
              </p>

              <div className="flex justify-center xl:justify-start gap-4 mb-8">
                <a
                  href="https://foodielandbk.netlify.app/"
                  className="badge bg-[#00bcd4] text-white p-3 cursor-pointer hover:bg-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
                <a
                  href="https://github.com/khadiza21/foodieLandBk.git"
                  className="badge bg-[#000000] text-white p-3 cursor-pointer hover:bg-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Key Features:</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Responsive design for all devices</li>
                  <li>Real-time data updates</li>
                  <li>Advanced and Charming Component Design</li>
                  <li>User-friendly UI Design </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">
                  Technologies Used:
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>React JS</li>
                  <li>Tailwind CSS</li>
                  <li>Daisy UI</li>
                  <li>MongoDB</li>
                  <li>Swiper JS</li>
                </ul>
              </div>
            </div>

            <div className="xl:w-1/2 flex justify-center items-center">
              <div className="w-[100%] h-full overflow-hidden rounded-lg">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="swiper "
                >
                  <SwiperSlide>
                    <img src={homepageView1} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={homepageView2} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={homepageView3} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={homepageView4} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BriefDescription;
