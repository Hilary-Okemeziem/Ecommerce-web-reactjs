import React from 'react'
import beach from '../images/beach.png'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Advert = () => {
  return (
    <div className='w-full h-[500px] lg:h-[550px] py-16'>
        <div className='w-full h-full relative'>
        <div className='absolute w-full top-0 left-0 h-full bg-black/30'></div>

            <img src={beach} alt="/" className='w-full h-full object-cover object-center'/>

            <div className='absolute w-full top-[20%] lg:top-[30%] pl-4 lg:pl-[10rem]'>
                <div className='grid md:grid-cols-2 w-full h-full'>
                    <div>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>Get ready for the beach </h1>
                        <p className='text-white text-xl pt-[2rem] md:pt-[3rem] lg:w-[70%]'>50% off vacation and beach wears. Offer available while stock lasts</p>
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
        </div>
    </div>
  )
}

export default Advert