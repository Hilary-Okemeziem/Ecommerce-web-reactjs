import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import blog3 from '../images/blog3.png'

const Blog = () => {
  return (
    <div className='w-full py-16 p-2'>
        <div className='flex items-center justify-center'>
            <h1 className='text-3xl text-[#986c55] font-bold heading'>Catch Up On The Blog</h1>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>
            <div className='shadow-md shadow-gray-300 bg-[#f5f5f5] dark:shadow-black dark:bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300 p-4 h-full'>
                <img src={blog1} alt="/" width={360} className='rounded-lg' />
                <p className='text-xl font-bold'>Budget summer wardrobe guide</p>
                <div className='pt-3'>
                    <Link to='/' className='cursor-pointer text-[#986c55]'>Read More</Link><HiArrowNarrowRight className='ml-1 inline'/>
                </div>
            </div>

            <div className='shadow-md shadow-gray-300 bg-[#f5f5f5] dark:shadow-black dark:bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300 p-4 h-full'>
                <img src={blog2} alt="/" width={360} className='rounded-lg' />
                <p className='text-xl font-bold'>Where fashion gets easy</p>
                <div className='pt-3'>
                    <Link to='/' className='cursor-pointer text-[#986c55]'>Read More</Link><HiArrowNarrowRight className='ml-1 inline'/>
                </div>
            </div>

            <div className='shadow-md shadow-gray-300 bg-[#f5f5f5] dark:shadow-black dark:bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300 p-4 h-full'>
                <img src={blog3} alt="/" width={360} className='rounded-lg' />
                <p className='text-xl font-bold'>Brighten up for summer looks</p>
                <div className='pt-3'>
                    <Link to='/' className='cursor-pointer text-[#986c55]'>Read More</Link><HiArrowNarrowRight className='ml-1 inline'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog