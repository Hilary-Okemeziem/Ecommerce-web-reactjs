import React, { useState,  Fragment, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu, AiOutlineInstagram } from 'react-icons/ai';
import ThemeToggle from './ThemeToggle';
import {HiShoppingCart, HiSearch, HiUser, HiChevronDown} from 'react-icons/hi'
import { Menu, Transition } from '@headlessui/react'
import { FaGithub, FaRegHeart, FaFacebookF, FaTwitter } from 'react-icons/fa';
import {SiGnuprivacyguard} from 'react-icons/si'
import {GoSignIn} from 'react-icons/go'
import logo from '../images/kcl.png'
import CartPage from './CartPage';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getTotals } from '../slices/cartSlice'
import { logoutUser } from '../slices/authSlice';
import { toast } from 'react-toastify';
import {ImUserCheck} from 'react-icons/im'
import {GoSignOut} from 'react-icons/go'
import {RiCoupon3Fill} from 'react-icons/ri'
import { cartUiActions } from '../slices/cartUiSlice';



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [navBg, setNavBg] = useState(false);
    const [carts, setCarts] = useState(false);

    const { cartTotalQuantity } = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleCart = () => {
        setCarts(!carts);
    };

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    };

    const showCart = useSelector(state => state.cartUi.cartIsVisible);

    const changeNavbg = () => {
        if (window.scrollY >= 90) {
            setNavBg(true);
        } else {
            setNavBg(false);
        }
    };
    window.addEventListener('scroll', changeNavbg);


  return (
    <div className={
        navBg ? 
            'fixed w-full h-20 shadow-xl z-[100] bg-[#F5F5F5] dark:bg-[#121212] ease-in-out duration-300'
            : 
            'fixed w-full h-20 z-[100] bg-[#F5F5F5] dark:bg-[#121212]'
        }>
        <div className='flex justify-between items-center w-full h-full px-2 lg:px-12 2xl:px-16'>
            <Link to='/' className='cursor-pointer'>
                <img src={logo} alt="/" width={270} />               
            </Link>

        <div className='hidden xl:flex'>
            <form className='relative'>
                <input className='bg-primary border border-input px-11 py-2 w-[33rem] shadow-lg rounded-lg' type="text" placeholder='Search products, brands and categories...' />
                <HiSearch className='absolute left-3 top-3 text-gray-400' size={20}/>
            </form>
            <div className='bg-button text-btnText dark:text-white px-5 py-2 ml-2 rounded-lg shadow-lg hover:shadow-2xl flex items-center justify-between cursor-pointer'>Search</div>
        </div>

        <div>
            <ul className='hidden md:flex'>
                <div className='flex items-center justify-between'>
                    {auth._id && auth.first_name ? 
                        (
                        <div className='flex items-center justify-between'>
                            <p><ImUserCheck className='inline mr-1' size={22}/> Hi, {auth.first_name}!</p>
                            <div>
                                <Menu as='div' className='relative text-left ml-1'>
                                    <div className='flex'>
                                        <Menu.Button>
                                            <HiChevronDown size={20} />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter='transition ease-out duration-100'
                                        enterFrom='transform opacity-0 scale-95'
                                        enterTo='transform opacity-100 scale-100'
                                        leave='transition ease-in duration-75'
                                        leaveFrom='transform opacity-100 scale-100'
                                        leaveTo='transform opacity-0 scale-95'
                                    >
                                        <Menu.Items className='origin-top-right absolute right-[-5rem] mt-4 w-56 divide-y divide-gray-100 rounded-md bg-[#F5F5F5] dark:bg-[#121212] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                            <div className='py-1'>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <a
                                                        href='/'
                                                        className={(
                                                        active
                                                            ? 'bg-gray-500 text-gray-100'
                                                            : 'text-gray-200',
                                                        'block px-4 py-2 text-center'
                                                        )}
                                                    >
                                                        Saved Items <FaRegHeart className='inline ml-4'/>
                                                    </a>
                                                    )}
                                                </Menu.Item>

                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <p  className={(
                                                        active
                                                            ? 'bg-gray-500 text-gray-100'
                                                            : 'text-gray-200',
                                                        'block px-4 py-2 text-primary border-b text-center cursor-pointer'
                                                        )}
                                                    >
                                                        Apply Coupon <RiCoupon3Fill className='inline ml-4'/>      
                                                    </p>
                                                    )}
                                                </Menu.Item>

                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <p  className={(
                                                        active
                                                            ? 'bg-gray-500 text-gray-100'
                                                            : 'text-gray-200',
                                                        'block px-4 py-2 text-primary text-center cursor-pointer'
                                                        )} onClick={() => {
                                                            dispatch(logoutUser(null))
                                                            toast.warning('Logged out!', {position: 'bottom-left'})
                                                            navigate('/login')
                                                        }}
                                                    >
                                                        Logout <GoSignOut className='inline ml-4'/>      
                                                    </p>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>

                        </div>
                        ) 
                        : 
                        (
                        <div className='flex items-center justify-between'>
                            <p> <HiUser className='inline mb-1' size={22}/> Account</p>
                            <div>
                                <Menu as='div' className='relative text-left'>
                                    <div className='flex'>
                                        <Menu.Button>
                                            <HiChevronDown size={20} />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter='transition ease-out duration-100'
                                        enterFrom='transform opacity-0 scale-95'
                                        enterTo='transform opacity-100 scale-100'
                                        leave='transition ease-in duration-75'
                                        leaveFrom='transform opacity-100 scale-100'
                                        leaveTo='transform opacity-0 scale-95'
                                    >
                                        <Menu.Items className='origin-top-right absolute right-[-5rem] mt-4 w-56 divide-y divide-gray-100 rounded-md bg-[#F5F5F5] dark:bg-[#121212] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                            <div className='py-1'>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <Link
                                                        to='/login'
                                                        className={(
                                                        active
                                                            ? 'bg-gray-500 text-gray-100'
                                                            : 'text-gray-200',
                                                        'block px-4 py-2 text-primary border-b text-center'
                                                        )}
                                                    >
                                                        Login <GoSignIn className='inline ml-4'/>

                                                        
                                                    </Link>
                                                    )}
                                                </Menu.Item>

                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <Link
                                                        to='/register'
                                                        className={(
                                                        active
                                                            ? 'bg-gray-500 text-gray-100'
                                                            : 'text-gray-200',
                                                        'block px-4 py-2 text-primary text-center border-b'
                                                        )}
                                                    >
                                                        Create Account <SiGnuprivacyguard className='inline ml-4'/>
                                                    </Link>
                                                    )}
                                                </Menu.Item>    
                
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <a
                                                        href='/'
                                                        className={(
                                                        active
                                                            ? 'bg-gray-500 text-gray-100'
                                                            : 'text-gray-200',
                                                        'block px-4 py-2 text-center'
                                                        )}
                                                    >
                                                        Saved Items <FaRegHeart className='inline ml-4'/>
                                                    </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                        )
                    }
                    
                </div>

                
                    <li className='ml-10 mt-2 hover:font-bold cursor-pointer relative' onClick={toggleCart}>
                        <HiShoppingCart className='inline mb-2' size={22} />  Cart
                        {cartTotalQuantity > 0 ? (
                            <div className='absolute -top-3 left-4 w-5 h-5 rounded-full bg-[#986c55] flex items-center justify-center'>
                                <p className='text-xs text-white font-semibold'>{cartTotalQuantity}</p>
                        </div>  
                        ): ''}
                    </li>
                <li className='ml-10 mt-1'>
                    <ThemeToggle/>
                </li>
            </ul>

            <div className='flex items-center justify-evenly'>
                {/* Cart icon */}
                <div className='md:hidden z-9 relative' onClick={toggleCart}>
                    <HiShoppingCart size={22}/>
                    {cartTotalQuantity > 0 ? (
                        <div className='absolute -top-3 left-4 w-5 h-5 rounded-full bg-[#986c55] flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>{cartTotalQuantity}</p>
                        </div>  
                    ): ''}
                </div>
                {/* Hamburger Icon */}
                <div
                    onClick={handleNav}
                    className='md:hidden z-9 ml-3'
                >
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>  
    </div>

        

    {/* Mobile Menu */}
    {/* Overlay */}
    <div className={
        nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : '' }>
            <div className={
                nav
                ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-4 ease-in duration-500 bg-slate-100 dark:bg-[#121212]'
                : 'fixed left-[-100%] top-0 p-4 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link to='/' className='cursor-pointer'>
                            <img src={logo} alt="/" width={270} onClick={() => setNav(false)}/>             
                        </Link>

                        <div
                            onClick={handleNav}
                            className='rounded-full shadow-md shadow-gray-400 dark:shadow-black p-3 cursor-pointer'
                        >
                            <AiOutlineClose />
                        </div>
                    </div>

                    <div className='border-b border-gray-300 my-3'>
                        <p className='w-[85%] md:w-[90%] py-3'>
                            Your Online Shopping Store
                        </p>
                    </div>

                    <div className='py-2 flex flex-col'>
                        {auth._id && auth.first_name ?
                        (
                            <div>
                                <p className='py-4 font-bold flex items-center'>
                                    <HiUser className='inline mr-4' size={22}/>Hi, {auth.first_name}!
                                </p>
                                <ul className='uppercase'>    
                                    <Link to='/' >
                                        <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                            Home
                                        </li>
                                    </Link>
                                    <Link to='/shoppage'>
                                        <li className='py-4 text-sm' onClick={() => setNav(false)}>
                                            Shop
                                        </li>
                                    </Link>
                                    <li className='py-4 text-sm'
                                    onClick={() => {
                                        dispatch(logoutUser(null))
                                        toast.warning('Logged out!', {position: 'bottom-left'})
                                        navigate('/login')
                                    }} 
                                    >
                                        Logout
                                    </li>
                                    <li className='py-4 flex items-center'>
                                        <ThemeToggle/> <span className='ml-2 text-sm'>Light/Dark Mode</span>
                                    </li>
                                </ul>   
                            </div>       
                        ) : 
                        (
                            <div>
                                <ul className='uppercase'>    
                                    <Link to='/' >
                                        <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                            Home
                                        </li>
                                    </Link>
                                    <Link to='/shoppage'>
                                        <li className='py-4 text-sm' onClick={() => setNav(false)}>
                                            Shop
                                        </li>
                                    </Link>
                                    <Link to='/login'>
                                        <li className='py-4 text-sm' onClick={() => setNav(false)}>
                                            <GoSignIn className='inline mr-4'/>Login
                                        </li>
                                    </Link>
                                    <Link to='/register'>
                                        <li className='py-4 text-sm' onClick={() => setNav(false)}>
                                            <SiGnuprivacyguard className='inline mr-4'/>Create Account
                                        </li>
                                    </Link>
                                    <li className='py-4 flex items-center'>
                                        <ThemeToggle/> <span className='ml-2 text-sm'>Light/Dark Mode</span>
                                    </li>
                                </ul>
                            </div>
                        )}    
                    </div>

                    <div>
                        <p className='uppercase tracking-widest text-[#644726] pt-8'>
                            Connect With Us
                        </p>

                        <div className='flex items-center justify-between my-6 w-full sm:w-[80%]'>
                            
                                <div className='rounded-full shadow-md shadow-gray-400 dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineInstagram />
                                </div>
                            

                            
                                <div className='rounded-full shadow-md shadow-gray-400 dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaTwitter />
                                </div>
                            

                            
                                <div className='rounded-full shadow-md shadow-gray-400 dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaFacebookF />
                                </div>
                            

                            
                                <div className='rounded-full shadow-md shadow-gray-400 dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                            
                        </div>
                    </div>    
                </div>
            </div>
        </div>

        {showCart && <CartPage/>}       
    </div>
  )
}

export default Navbar