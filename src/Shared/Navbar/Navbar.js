import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo1.png';
const Navbar = () => {
    const [search, setSearch] = useState(false);
    return (
        <div className="">
            {/* 
            <div className='bg-[#379237] relative'>
                <div className='w-4/5 mx-auto flex justify-between items-center text-[18px] font-semibold py-6'>
                    <div className=''>
                        <img className='w-2/3' src={logo} alt="" />
                    </div>
                    <ul className='flex items-center'>
                        <li className='px-5 border-r-2 border-black hover:bg-black hover:text-white text-black hover:rounded-full transition-all duration-200'><a href="">Home</a></li>
                        <li className='px-5 border-r-2 border-black hover:bg-black hover:text-white text-black hover:rounded-full transition-all duration-200'><a href="">About</a></li>
                        <li className='px-5 border-r-2 border-black hover:bg-black hover:text-white text-black hover:rounded-full transition-all duration-200'><a href="">Donate</a></li>
                        <li className='px-5 border-r-2 border-black hover:bg-black hover:text-white text-black hover:rounded-full transition-all duration-200'><a href="">Blogs</a></li>
                        <li className='px-5 border-r-2 border-black hover:bg-black hover:text-white text-black hover:rounded-full transition-all duration-200'><a href="">Gallery</a></li>
                        <li className='px-5 border-r-2 border-black hover:bg-black hover:text-white text-black hover:rounded-full transition-all duration-200'><a href="">Dashboard</a></li>
                        {
                            search ? <li className='px-5 text-[18px] cursor-pointer'><i onClick={() => setSearch(!search)} className="fa-solid fa-xmark"></i></li> : <li onClick={() => setSearch(!search)} className='px-5'><i className="fa-solid fa-magnifying-glass cursor-pointer"></i></li>
                        }
                        <li className='bg-slate-500 text-black py-2 px-4 bg-gradient-to-t from-[#58bd0b] to-[#a3af1b] rounded-[6px] cursor-pointer'>Donate</li>
                    </ul>
                </div>
                <form className={`w-2/5 absolute bg-[#82CD47] px-2 rounded-md right-52 transition-opacity duration-300 ${search ? "opacity-100" : "opacity-0"}`}>
                    <div className='relative w-full my-3'>
                        <input type="text" className='w-full py-2 px-4 rounded-full outline-[#82CD47]' placeholder='Search' />
                        <i onClick={() => setSearch(!search)} className="fa-solid fa-xmark absolute right-[20px] top-[4px] text-[#439207] hover:bg-gray-200 p-2 rounded-full cursor-pointer"></i>
                    </div>
                </form>
            </div>
             */}

            <div className="navbar bg-[#6d1b7b] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 font-semibold text-lg font-sans bg-[#6d1b7b] text-white">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='#'>About</Link></li>
                            {/* <li><Link to='#'>Donate</Link></li> */}
                            <li><Link to='#'>Blogs</Link></li>
                            <li><Link to='#'>Gallery</Link></li>
                            <li><Link to='#'>Dashboard</Link></li>
                            <li className='border rounded-lg bg-[#8f09a7] hover:bg-[#6d1b7b]'><Link to='#'>Donate</Link></li>
                        </ul>
                    </div>
                    <Link href="" className="btn btn-ghost normal-case hidden lg:flex md:flex"><img className='w-4/5' src={logo} alt="" /></Link>
                    {/* <Link to='/login' className='btn btn-ghost btn-circle avatar ml-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                    </Link> */}


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-lg font-sans">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='#'>About</Link></li>
                        {/* <li><Link to='#'>Donate</Link></li> */}
                        <li><Link to='#'>Blogs</Link></li>
                        <li><Link to='#'>Gallery</Link></li>
                        <li><Link to='#'>Dashboard</Link></li>
                        <li className='border rounded-lg bg-[#8f09a7] hover:bg-[#6d1b7b]'><Link to='#'>Donate</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="form-control">
                        <form className='md:flex'>
                            <input type="text" placeholder="Search" className="input input-bordered hidden lg:block md:block text-black" />
                            <button className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;