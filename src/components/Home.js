import React from 'react'
import Hero from '../layout/Hero'
import Category from '../layout/Category'
import FlashSale from '../layout/FlashSale'
import Advert from '../layout/Advert'
import Deals from '../layout/Deals'
import FashionInspo from '../layout/FashionInspo'
import Brands from '../layout/Brands'
import Banner from '../layout/Banner'
import Blog from '../layout/Blog'
import Footer from './Footer'


const Home = ({rowID}) => {
  return (
    <div className='pt-[5rem]'>
        <div className='bg-[#986C55] w-full h-[4rem] hidden xl:flex'>
            <ul className='flex items-center justify-between px-[8rem] h-full w-full'>
                <li className='cursor-pointer text-[#dbdbdb]'>What's New</li>
                <li className='cursor-pointer text-[#dbdbdb]'>Flash Sale</li>
                <li className='cursor-pointer text-[#dbdbdb]'>Dresses</li>
                <li className='cursor-pointer text-[#dbdbdb]'>Top</li>
                <li className='cursor-pointer text-[#dbdbdb]'>Lingerie & Lounge</li>
                <li className='cursor-pointer text-[#dbdbdb]'>Beachwear</li>
                <li className='cursor-pointer text-[#dbdbdb]'>Active Wear</li>
                <li className='cursor-pointer text-[#dbdbdb]'>Summer Sale</li>
                <li className='cursor-pointer text-[#dbdbdb]'>Top Brands</li>
            </ul>
        </div>

        <div className='relative flex items-center justify-between group bg-[#986C55] h-[4rem] xl:hidden '>
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                <div className='flex items-center justify-between h-full w-full px-4 relative'>
                        <span className='text-[#dbdbdb]'>What's New</span>
                        <span className='ml-4 text-[#dbdbdb]'>Flash Sale</span>
                        <span className='ml-4 text-[#dbdbdb]'>Dresses</span>
                        <span className='ml-4 text-[#dbdbdb]'>Top</span>
                        <span className='ml-4 text-[#dbdbdb]'>Lingerie & Lounge</span>
                        <span className='ml-4 text-[#dbdbdb]'>Beachwear</span>
                        <span className='ml-4 text-[#dbdbdb]'>Active Wear</span>
                        <span className='ml-4 text-[#dbdbdb]'>Summer Sale</span>
                        <span className='ml-4 text-[#dbdbdb]'>Top Brands</span>
                </div>    
            </div>
        </div>

        <div className='pt-5 max-w-[1240px] m-auto'>
            <Hero/>
            <Category/>
            <FlashSale rowID='2'/>
        </div>
        <Advert/>
        <div className='pt-5 max-w-[1240px] m-auto'>
            <Deals/>
            <FashionInspo rowID='3'/>
            <Brands rowID='4'/>
        </div>
        <Banner/>
        <div className='pt-5 max-w-[1240px] m-auto'>
            <Blog/>
        </div>
        <Footer/>

    </div>
  )
}

export default Home