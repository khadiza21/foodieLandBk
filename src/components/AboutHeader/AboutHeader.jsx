import { Link } from 'react-router-dom';
import './AboutHeader.css'
const AboutHeader = () => {
    return (
        <div className=" container">
            <div className="aboutHeader my-10">
                <div className="aboutHeaderImage  py-24 ">
                    <div className="flex items-center justify-center  ">
                        <h2 className='flex items-center'><Link to='/' className='hover:underline font-[600]'>Home</Link> <span className='font-bold mx-5'><svg className="w-[15px] h-[15px] fill-[#8e8e8e]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path>

                        </svg></span> <span className='font-bold'>About</span></h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;