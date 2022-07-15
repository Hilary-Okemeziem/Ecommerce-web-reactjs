import React from 'react'
import { Link } from 'react-router-dom'
import BestSelling from '../shopLayout/BestSelling'
import InspiredByCart from '../shopLayout/InspiredByCart'
import Recommended from '../shopLayout/Recommended'
import TodayDeals from '../shopLayout/TodayDeals'
import TopDeals from '../shopLayout/TopDeals'
import TopDiscount from '../shopLayout/TopDiscount'
import Brands from '../layout/Brands'
import Footer from './Footer'

const ShopPage = () => {
  return (
    <div>

    <div className='max-w-[1240px] m-auto pt-5'>
        <div className='w-full py-16 p-2'>
            <div className='w-full bg-[#986c55] p-8'>
                <p className='font-bold'>
                    <Link to='/' className='cursor-pointer'>Home</Link> / <span>Fashion Store </span>
                </p>
            </div>
            <div className='py-6'>
                <TodayDeals rowID='5'/>
                <TopDeals rowID='6'/>
                <BestSelling rowID='7'/>
                <Brands/>
                <TopDiscount rowID='8'/>
                <Recommended rowID='9'/>
                <InspiredByCart rowID='10'/>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ShopPage