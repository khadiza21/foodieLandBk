import aboutKitchen from '../../assets/images/Group 880.png';
import './AboutKitchen.css'
const AboutKitchen = () => {
    return (
        <div className='container'>
        <div className='mb-24 aboutKitchen'>
            <div className="card lg:card-side    ">
                 <div className="card-body flex justify-center">
                    <div className='aboutKitchenLeft  '>
                    <h3 className="card-title my-5">Everyone can be a chef in their own kitchen</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque ex neque. Modi, amet ipsa? Lorem ipsum dolor sit amet.</p>
                    <div className="card-actions justify-start">
                        <button className="btn">Learn More</button>
                    </div>
                    </div>
                </div>
                <figure className='aboutKitchenRight'>
                    <img
                        src={aboutKitchen}
                        alt="about Own Kitchen" />
                </figure>
               
            </div>
        </div></div>
    );
};

export default AboutKitchen;