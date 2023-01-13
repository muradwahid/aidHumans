import React from 'react';
import child1 from '../../assets/child help/1.jpg';
import child2 from '../../assets/child help/2.jpg';
import child3 from '../../assets/child help/3.jpg';
const Goal = () => {
    return (
        <div className="w-4/5 mx-auto text-center my-32">
            <h1 className='font-semibold text-xl mt-10 mb-2'>Our Goal</h1>
            <p className='font-semibold text-4xl mb-7 font-sans'>Help Poor People</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                <div className="">
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={child1} className='h-[250px]' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-bold text-2xl border-b-[1px] text-[#6d1b7b] border-black mb-4">Donate Money</h2>

                            <p className='font-medium text-[18px] text-gray-700 text-justify'>Apni osohay and doridro manusder arthik sahajjo korte paren ei maddhome.</p>
                            <div className="card-actions">
                                <button className="btn  w-full text-lg bg-[#6d1b7b] mt-4">Donate </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={child2} className='h-[250px]' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-bold text-2xl border-b-[1px] text-[#6d1b7b] border-black mb-4">Handle With Care</h2>

                            <p className='font-medium text-[18px] text-gray-700 text-justify'>Apni osohay and doridro manusder arthik sahajjo korte paren ei maddhome.</p>
                            <div className="card-actions">
                                <button className="btn  w-full text-lg bg-[#6d1b7b] mt-4">Donate </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={child3} className='h-[250px]' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-bold text-2xl border-b-[1px] text-[#6d1b7b] border-black mb-4">Be A Volunteer</h2>

                            <p className='font-medium text-[18px] text-gray-700 text-justify'>Apni osohay and doridro manusder arthik sahajjo korte paren ei maddhome.</p>
                            <div className="card-actions">
                                <button className="btn  w-full text-lg bg-[#6d1b7b] mt-4">Donate </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goal;