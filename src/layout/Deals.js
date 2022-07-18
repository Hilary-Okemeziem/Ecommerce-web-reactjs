import React from 'react'
import male from '../images/male.png'
import female from '../images/female.png'

const Deals = () => {
  return (
    <div className='w-full py-16 p-2'>
        <div className='flex items-center justify-center'>
            <h1 className='text-[#986c55] text-3xl md:text-4xl font-bold tracking-widest heading'>Best Deals Today</h1>
        </div>
        <div className='grid lg:grid-cols-2 gap-8 w-full h-full py-10'>
            <div className='bg-[#A1BEC2] xl:w-[600px] xl:h-[337px] h-auto p-0 xl:p-4'>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='flex flex-col py-6 md:py-16 pl-4 md:pl-5 items-center justify-center'>
                        <div className='text-2xl hidden sm:flex'>Looking Good</div>
                        <div className='text-xl hidden sm:flex'>=</div>
                        <div className='text-2xl hidden sm:flex'>Feeling Good</div>
                        <div className='text-sm py-5 sm:pl-10 lg:pl-5 xl:pl-0'>Get up to 70% Off on All t-shirts and accessories!</div>
                    </div>
                    <div>
                        <img src={male} alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-[#FABE8C] xl:w-[600px] xl:h-[337px] h-auto p-0 xl:p-4'>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='flex flex-col py-6 md:py-16 pl-4 md:pl-5 items-center justify-center'>
                        <div className='text-2xl hidden sm:flex'>Looking Nice</div>
                        <div className='text-xl hidden sm:flex'>=</div>
                        <div className='text-2xl hidden sm:flex'>Feeling Nice</div>
                        <div className='text-sm py-5 sm:pl-10 lg:pl-5 xl:pl-0'>50% off vacation and beach wears. Offer available while stock lasts</div>
                    </div>
                    <div>
                        <img src={female} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deals