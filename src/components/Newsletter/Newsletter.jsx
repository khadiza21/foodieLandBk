import newsletterSalad from '../../assets/images/newsletter-1.png'
import newsletterPlate from '../../assets/images/Photo-plate.png'
import './Newsletter.css'
const Newsletter = () => {
    return (
        <div className=' container'>
            <div className="newsletter my-24 py-16 px-4 md:px-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6">

                    <div className="hidden md:block relative">
                        <img
                            src={newsletterSalad}
                            alt="newsletter plater"
                            className="imageONe "
                        />
                    </div>


                    <div className="text-center  w-full bg-slate-400">
                        <div className='bg-yellow-200 newsletterBox'>
                            <h3 className="text-3xl font-bold mb-4">Deliciousness to your inbox</h3>
                            <p className="text-gray-600 mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                            </p>
                            <form className="flex justify-center items-center space-x-2 px-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className=" outline-none border-0 w-full max-w-xs"
                                />
                                <button type="submit" className="btn ">Subscribe</button>
                            </form></div>
                    </div>


                    <div className="hidden md:block relative">
                        <img
                            src={newsletterPlate}
                            alt="Newsletter Salad picture"
                            className="imageTwo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;