import vegetables from "../../assets/images/contact.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jwjttgk",
        "template_npae9y9",
        form.current,
        "CQ5OKwfRskTWUvM5e"
      )
      .then(
        (result) => {
          console.log(result.text, "SUCCESS!");
          toast.success("Successfully Sent Message!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container ">
      <div className="card lg:card-side bg-base-100 my-20 flex flex-col lg:flex-col xl:flex-row">
        <div className="m-5 w-full  xl:w-1/2 p-5">
          <h2 className="text-3xl lg:text-5xl font-bold my-5 text-center lg:text-left">
            Get in Touch for any Information!
          </h2>
          <p className="mb-10 text-gray-500 text-sm lg:text-base text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad
            sunt dignissimos beatae fugit nam. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Assumenda, dicta.
          </p>
          <img
            className="mx-auto lg:mx-0"
            src={vegetables}
            alt="Vegetable Salad Raw Material"
          />
          <div className="flex flex-col lg:flex-row gap-10 my-5">
            <div className="border p-5 rounded-xl border-black">
              <div className="flex gap-2">
                <span className="bg-black p-3 rounded">
                  <svg
                    className="w-[25px] h-[25px] fill-white"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                  </svg>
                </span>
                <div>
                  <span className="font-bold">Send us an email</span>
                  <p className="text-gray-500 mt-1">example@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="border p-5 rounded-xl border-cyan-500">
              <div className="flex gap-2">
                <span className="bg-cyan-500 p-3 rounded">
                  <svg
                    className="w-[25px] h-[25px] fill-white"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                  </svg>
                </span>
                <div>
                  <span className="font-bold">Give us a call</span>
                  <p className="text-gray-500 mt-1">+000 999 777 888</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body shadow-lg rounded-lg w-full xl:w-1/2">
          <h2 className="card-title text-xl lg:text-2xl font-bold my-3 text-center lg:text-left">
            Contact Us!
          </h2>
          <div className="w-full px-0 mx-0">
            <form ref={form} onSubmit={sendEmail} className="w-full px-0 mx-0">
              <div className="mb-3 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-input w-full px-4 py-3 shadow border border-cyan-500 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  name="user_name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="form-input w-full px-4 py-3 shadow border border-cyan-500 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-input w-full px-4 py-3 shadow border border-cyan-500 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="form-textarea w-full px-4 py-3 shadow border border-cyan-500 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  rows="4"
                ></textarea>
              </div>
              <div className="mt-4 text-center">
                <button
                  className="btn bg-black text-white rounded-2xl py-2 px-6 font-bold hover:bg-cyan-500 transition duration-300"
                  type="submit"
                >
                  <span className="text-base lg:text-xl flex gap-2">
                    Send Message
                    <svg
                      className="my-auto w-[20px] h-[20px] fill-white"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
