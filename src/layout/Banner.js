import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import festival from '../images/festival.png'

const Banner = () => {
  return (
    <div className='w-full h-[500px] lg:h-[550px] py-16'>
        <div className='bg-fixed md:flex flex-col justify-center items-start w-full h-[60vh] bg-center bg-no-repeat bg-cover banner-img hidden '>
            <div className='flex items-center justify-between flex-wrap md:flex-nowrap max-w-[1240px] m-auto p-2'>
                <div>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>Festivals x Concerts </h1>
                    <p className='text-white text-xl pt-[2rem] md:pt-[3rem] lg:w-[70%]'>60% off festival and concert wears. Offer available while stock lasts</p>
                </div>
                <div>
                    <Link to='/shoppage'>
                        <button className='text-[#2776AA] text-xl group border-2 px-10 py-3 my-9 md:my-[5rem] xl:my-[3rem] md:ml-[7rem] rounded-lg flex items-center bg-[#ffffff] hover:border-[#ffffff] hover:bg-transparent hover:text-white'>
                            Grab Deals <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
                        </button>             
                    </Link>
                </div>
            </div>    
        </div>
        
        <div className='relative md:hidden'>
            <div className='absolute w-full h-full bg-black/25'></div>
            <img src={festival} alt="/" className='w-full h-[60vh] object-cover'/>

            <div className='flex items-center justify-between flex-wrap max-w-[1240px] m-auto p-2 absolute top-0 left-0 w-full h-full'>
                <div>
                    <h1 className='text-3xl pt-10 font-bold text-white'>Festivals x Concerts </h1>
                    <p className='text-white text-xl pt-[2rem]'>60% off festival and concert wears. Offer available while stock lasts</p>
                </div>
                <div>
                    <Link to='/shoppage'>
                        <button className='text-[#2776AA] text-xl group border-2 px-10 py-3 my-9 rounded-lg flex items-center bg-[#ffffff] hover:border-[#ffffff] hover:bg-transparent hover:text-white'>
                            Grab Deals <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
                        </button>             
                    </Link>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default Banner