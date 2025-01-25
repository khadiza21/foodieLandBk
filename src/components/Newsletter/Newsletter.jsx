
import "./Newsletter.css";
const Newsletter = () => {
    return (
        <div className=" container">
            <div className="newsletter my-24">
                <div className="newsletterImage  py-20 ">
                    <div className="flex items-center justify-center  ">
                        <div className=" newsletterBox">
                            <h3 className=" mx-auto font-bold mb-4">
                                Deliciousness to your inbox
                            </h3>
                            <p className="text-gray-600 mb-6 mx-auto">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor.
                            </p>
                            <form className="flex justify-center items-center mx-auto px-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className=" outline-none border-0 w-full max-w-xs"
                                />
                                <button type="submit" className="btn  bg-[#000000] hover:bg-slate-800 text-[#ffffff]">
                                    Subscribe
                                </button>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
