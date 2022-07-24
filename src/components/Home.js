import React from 'react'
import Marquee from 'react-fast-marquee'
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
        <Marquee className='bg-[#986C55] ' gradient={false} pauseOnHover speed={40}>
            <div className='justify-center items-center gap-10 w-full h-[4rem] flex'>
                <div className='cursor-pointer text-[#dbdbdb] hover:scale-110 ease-in duration-200 px-4'>What's New</div>
                <div className='cursor-pointer text-[#dbdbdb] hover:scale-110 ease-in duration-200'>Flash Sale</div>
                <div className='cursor-pointer text-[#dbdbdb] hover:scale-110 ease-in duration-200'>Dresses</div>
                <div className='cursor-pointer text-[#dbdbdb] hover:scale-110 ease-in duration-200'>Top</div>
                <div className='cursor-pointer text-[#dbdbdb] hover:scale-110 ease-in duration-200'>Lingerie & Lounge</div>
                <div className='cursor-pointer text-[#dbdbdb] hover:scale-110 ease-in duration-200'>Beachwear</div>
                <div className='cursor-pointer text-[#dbdbdb] hover:scale-110 ease-in duration-200'>Active Wear</div>
                <div className='cursor-pointer text-[#dbdbdb] hover:scale-110 ease-in duration-200'>Summer Sale</div>
                <div className='cursor-pointer text-[#dbdbdb] hover:scale-110 ease-in duration-200'>Top Brands</div>
            </div>
        </Marquee>

        <div className='pt-5 max-w-[1240px] m-auto'>
            <Hero/>
            <Category rowID='11'/>
            <FlashSale rowID='2'/>
        </div>
        <Advert/>
        <div className='pt-5 max-w-[1240px] m-auto'>
            <Deals/>
            <FashionInspo rowID='3'/>
            <Brands/>
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