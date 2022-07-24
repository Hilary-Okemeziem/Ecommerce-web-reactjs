import React from 'react'
import dress from '../images/dress.png'
import beachwear from '../images/beachwear.png'
import top from '../images/top.png'
import shoe from '../images/shoe.png'
import bottom from '../images/bottom.png'
import tshirt from '../images/tshirt.png'
import activewear from '../images/activewear.png'
import accesory from '../images/accesory.png'
import { Link } from 'react-router-dom'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Category = () => {
  return (
    <div className='w-full py-16 p-4'>
        <div className='flex items-center justify-center pt-8'>
            <h1 className='text-[#644726] text-3xl font-bold heading'>Shop By Category</h1>
        </div>

        <div className='pt-8'>
            <Link to='/shoppage' className='underline group flex items-end justify-end cursor-pointer'>View all<span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='inline'/></span></Link>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-[1rem]'>
            <div className='p-6 shadow-md shadow-gray-300 bg-[#f5f5f5] dark:shadow-black dark:bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
                    <div className='mx-auto'>
                        <img src={dress} alt="/" style={{width: '64px', height: '64px'}} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Dresses</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-md shadow-gray-300 bg-[#f5f5f5] dark:shadow-black dark:bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
                    <div className='mx-auto'>
                        <img src={beachwear} alt="/" style={{width: '64px', height: '64px'}} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>BeachWears</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-md shadow-gray-300 bg-[#f5f5f5] dark:shadow-black dark:bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
                    <div className='mx-auto'>
                        <img src={top} alt="/" style={{width: '64px', height: '64px'}} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Tops</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-md shadow-gray-300 bg-[#f5f5f5] dark:shadow-black dark:bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
                    <div className='mx-auto'>
                        <img src={shoe} alt="/" style={{width: '64px', height: '64px'}} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Shoes</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-md shadow-gray-300 bg-[#f5f5f5] dark:shadow-black dark:bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
                    <div className='mx-auto'>
                        <img src={bottom} alt="/" style={{width: '64px', height: '64px'}} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Bottoms</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-md shadow-gray-300 bg-[#f5f5f5] dark:shadow-black dark:bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
                    <div className='mx-auto'>
                        <img src={tshirt} alt="/" style={{width: '64px', height: '64px'}} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>T-Shirts</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-md shadow-gray-300 bg-[#f5f5f5] dark:shadow-black dark:bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
                    <div className='mx-auto'>
                        <img src={activewear} alt="/" style={{width: '64px', height: '64px'}} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Active Wears</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-md shadow-gray-300 bg-[#f5f5f5] dark:shadow-black dark:bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
                    <div className='mx-auto'>
                        <img src={accesory} alt="/" style={{width: '64px', height: '64px'}} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Accessories</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category