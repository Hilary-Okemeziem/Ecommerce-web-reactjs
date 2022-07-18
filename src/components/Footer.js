import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/kcl.png'
import ThemeToggle from './ThemeToggle'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='bg-[#D9D9D9] dark:bg-[#0e0e10] w-full'>
         <div className='pt-5 max-w-[1150px] m-auto py-16 px-5'>
            <Link to='/' className='cursor-pointer'>
                <img src={logo} alt="/" width={270} />               
            </Link>
                
            <div className='flex items-center justify-between flex-wrap lg:flex-nowrap'>
                <div>
                    <p className='font-bold '>Subscribe to Our Newsletters</p>
                    <div className='py-4'>
                        <form>
                            <input className='bg-primary border border-input p-2 shadow-xl rounded-lg rounded-r-none w-auto' type="email" placeholder='Enter Your Email' />
                            <button className='bg-button text-btnText p-2 rounded-lg rounded-l-none shadow-xl hover:shadow-2xl w-auto my-2 dark:text-gray-300'>Subscribe</button>
                        </form>
                    </div>
                    <h2 className='font-bold'>Contact Info</h2>
                    <p className='py-2'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    <div className='flex py-4 text-[#986c55]'>
                        <AiOutlineInstagram className='cursor-pointer' size={18}/>
                        <FaTwitter className='ml-[5rem] cursor-pointer' size={18}/>
                        <FaFacebookF className='ml-[5rem] cursor-pointer' size={18}/>
                        <FaGithub className='ml-[5rem] cursor-pointer' size={18}/>
                    </div>
                </div>

                <div>
                    <h2 className='font-bold'>Categories</h2>
                    <ul className='py-4'>
                        <li className='py-2 cursor-pointer hover:text-[#986c55]'>Dresses</li>
                        <li className='py-2 cursor-pointer hover:text-[#986c55]'>Tops</li>
                        <li className='py-2 cursor-pointer hover:text-[#986c55]'>Bottoms</li>
                        <li className='py-2 cursor-pointer hover:text-[#986c55]'>Beachwears</li>
                    </ul>
                </div>

                <div>
                    <h2 className='font-bold'>Customer Care</h2>
                    <ul className='py-4'>
                        <li className='py-2 cursor-pointer hover:text-[#986c55]'>My account</li>
                        <li className='py-2 cursor-pointer hover:text-[#986c55]'>Cart</li>
                        <li className='py-2 cursor-pointer hover:text-[#986c55]'>Order History</li>
                        <li className='py-2 cursor-pointer hover:text-[#986c55]'>Order Tracking</li>
                    </ul>
                </div>

                <div>
                    <h2 className='font-bold'>Pages</h2>
                    <ul className='py-4'>
                        <li className='py-2 cursor-pointer hover:text-[#986c55]'>Blog</li>
                        <li className='py-2 cursor-pointer hover:text-[#986c55]'>Browse the shop</li>
                        <li className='py-2 cursor-pointer hover:text-[#986c55]'>Categories</li>
                        <li className='py-2 cursor-pointer hover:text-[#986c55]'>Pre-built pages</li>
                    </ul>
                </div>

                <div className='md:hidden mr-[6rem]'>
                    <ThemeToggle/>
                </div>
            </div>
         </div>
         <div className='text-sm text-center bg-[#A1BEC2] dark:bg-[#627d98] py-4'>&copy;2022. Powered by Kcee Api. Built by Hilary</div>
    </div>
  )
}

export default Footer