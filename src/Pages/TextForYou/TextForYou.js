import React from 'react';
import slider2 from '../../assets/sliderImage/slider2.jpg';

const TextForYou = () => {
    return (
        <div className="w-4/5 mx-auto mt-[-250px]">
            <div className="card lg:card-side shadow-2xl">
                <div className="w-full ">
                    <img className='h-full rounded' src={slider2} alt="Album" />
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">Our Goal In This Project</h2>
                    <p className='text-lg font-semibold'>Bangladesh is one of the poorest countries in the Asian continent.  Due to the small size of the country and the large population, poverty is common among most of the people.  And we have opened AidHumans organization to help the distressed, helpless and poor people.  If you want, you can also lend your helping hand.</p>
                    <div className="card-actions">
                        <button className="btn bg-[#6d1b7b]">Show more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextForYou;