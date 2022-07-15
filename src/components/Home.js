import React from 'react'
import Hero from '../layout/Hero'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md' 
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
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }
  return (
    <div className='pt-[5rem]'>
        <div className='bg-[#986C55] w-full h-[4rem] hidden xl:flex'>
            <ul className='flex items-center justify-between px-[8rem] h-full w-full'>
                <li className='cursor-pointer'>What's New</li>
                <li className='cursor-pointer'>Flash Sale</li>
                <li className='cursor-pointer'>Dresses</li>
                <li className='cursor-pointer'>Top</li>
                <li className='cursor-pointer'>Lingerie & Lounge</li>
                <li className='cursor-pointer'>Beachwear</li>
                <li className='cursor-pointer'>Active Wear</li>
                <li className='cursor-pointer'>Summer Sale</li>
                <li className='cursor-pointer'>Top Brands</li>
            </ul>
        </div>

        <div className='relative flex items-center justify-between group bg-[#986C55] h-[4rem] xl:hidden '>
            <MdChevronLeft onClick={slideLeft} size={30} className='bg-black rounded-full absolute opacity-50 cursor-pointer z-10 hidden group-hover:block left-0'/>
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                <div className='flex items-center justify-between h-full w-full px-4 relative'>
                        <span>What's New</span>
                        <span className='ml-4'>Flash Sale</span>
                        <span className='ml-4'>Dresses</span>
                        <span className='ml-4'>Top</span>
                        <span className='ml-4'>Lingerie & Lounge</span>
                        <span className='ml-4'>Beachwear</span>
                        <span className='ml-4'>Active Wear</span>
                        <span className='ml-4'>Summer Sale</span>
                        <span className='ml-4'>Top Brands</span>
                </div>    
            </div>
            <MdChevronRight onClick={slideRight} size={30} className='bg-black rounded-full absolute opacity-50 cursor-pointer z-10 hidden group-hover:block right-0'/>
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