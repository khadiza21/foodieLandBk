import verfiedLogo from '../../assets/images/Badge.png';

const BriefDescription = () => {
    return (
        <div>
            <section className="bg-gray-100 text-gray-800 py-12 px-6 md:py-16">
                <div className="container max-w-screen-lg mx-auto flex flex-col md:flex-row items-center gap-8">

                    <div className="flex-shrink-0">
                        <img
                            src={verfiedLogo}
                            alt="Company Logo"
                            className="w-20 h-20 md:w-28 md:h-28 object-contain"
                        />
                    </div>


                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold">Welcome to Our App</h1>
                        <p className="text-lg md:text-xl mt-3 text-gray-600">
                            Simplify your tasks and elevate your productivity with our innovative tools and solutions.
                        </p>
                        <p className="text-md mt-2 text-gray-500">
                            Join thousands of happy users making their lives easier every day.
                        </p>
                        <button className="mt-6 px-6 py-3 bg-[#000000] text-white rounded-lg hover:bg-[#00bcd4] transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BriefDescription;