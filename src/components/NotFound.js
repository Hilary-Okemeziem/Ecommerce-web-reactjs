import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const NotFound = () => {
  return (
    <div>
        <div className='max-w-[1240px] m-auto p-4' >
            <div className='w-full py-16 p-2'>
                <div className='flex items-center justify-center flex-col min-h-[40vh]'>
                    <h2 className='text-4xl font-bold'>404 ERROR</h2>
                    <p className='text-3xl py-2 tracking-widest'>Page not found</p>
                    <p>To return to the Home page</p>
                    <p>Click <Link to='/' className='cursor-pointer text-[#986c55]'>Here</Link></p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default NotFound