import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../images/hero.png'

const Hero = () => {
  return (
    <div className='bg-[#A1BEC2] w-full'>
        <div className='pl-[5rem] relative hidden lg:flex'>
            <div className='flex items-center justify-between z-10'>
                <div>
                    <h4 className='text-xl text-[#252B42]'>Summer 2022</h4>
                    <h1 className='text-5xl py-5 text-[#644726] font-bold'>NEW COLLECTION</h1>
                    <p className='py-2 text-[#252B42] text-lg'>Shop the hottest, newest sets of fits for your vacation and summer activities</p>
                    <button className='bg-button text-btnText dark:text-white px-5 py-3 mt-4 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer'>
                        <Link to='/shoppage' className='cursor-pointer'>SHOP NOW</Link>
                    </button>
                </div>
                <div className='z-10'>
                    <img src={hero} alt="/" />
                </div>
            </div>
            <div className='rounded-full w-[422px] h-[422px] bg-[#ffffff] absolute top-0 right-[90px] hidden lg:block'></div>
            <div className='rounded-full w-[70px] h-[70px] bg-[#ffffff] absolute top-0 right-[550px] hidden lg:block'></div>   
        </div>

        <div className='hero-section pl-5 lg:hidden'>
            <div className='hero-text'>
                <h4 className='text-xl text-[#ffffff]'>Summer 2022</h4>
                <h1 className='text-5xl py-5 text-[#644726] font-bold'>NEW COLLECTION</h1>
                <p className='py-2 text-[#ffffff] text-lg sm:w-[50%]'>Shop the hottest, newest sets of fits for your vacation and summer activities</p>
                <button className='bg-button text-btnText dark:text-white px-5 py-3 mt-3 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer z-10'>
                    <Link to='/shoppage' className='cursor-pointer'>SHOP NOW</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero