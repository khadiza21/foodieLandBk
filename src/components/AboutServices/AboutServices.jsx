
import aboutServiceImg1 from '../../assets/images/about1.png';
import aboutServiceImg2 from '../../assets/images/about2.png';
import aboutServiceImg3 from '../../assets/images/about3.png';
import aboutServiceImg4 from '../../assets/images/about4.png';
const AboutServices = () => {
    const data = [
        {
            id: 1,
            image:aboutServiceImg1 ,
            description: "Quick, No-cost Delivery & Setup Included",
        },
        {
            id: 2,
            image: aboutServiceImg2 ,
            description: "30-Day, No-Risk Money-Back Assurance",
        },
        {
            id: 3,
            image: aboutServiceImg3 ,
            description: "24/7 Expert Help, Always Just a Click Away",
        },
        {
            id: 4,
            image:  aboutServiceImg4 ,
            description: "Flexible Payments with Various Credit Card",
        }
    ]
    return (
        <section className='my-20'>

            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">We Provides....</h2>
                <p className='text-[#9c9c9c]  text-center mb-8 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quas.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="py-5 bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
                        >
                            <img
                                src={item.image}
                                alt={`Item ${item.id}`}
                                className="mx-auto h-30 object-cover rounded-md"
                            />
                            <p className="mt-4 text-gray-700 my-4">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default AboutServices;