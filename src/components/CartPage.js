import React, { useState, useEffect } from 'react'
import {MdOutlineKeyboardBackspace, MdRemoveShoppingCart} from 'react-icons/md'
import {BiPlus, BiMinus} from 'react-icons/bi'
import {TbTrashX} from 'react-icons/tb'
import { useSelector } from 'react-redux'
import emptycart from '../images/emptycart.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { decreaseCart, removeFromCart, addToCart, clearCart, getTotals } from '../slices/cartSlice'
import { cartUiActions } from '../slices/cartUiSlice'

const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }
    

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
        
    }

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem))
    }

    const handleclearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className='fixed right-0 top-0 w-full h-screen bg-black/70'>
            <div className='fixed top-0 right-0 w-full sm:w-[45%] lg:w-[33%] h-screen bg-slate-100 dark:bg-[#121212] drop-shadow-md flex flex-col z-[101] ease-in-out duration-1000'>
                <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
                    <MdOutlineKeyboardBackspace size={22} onClick={toggleCart}/>
                    <p className='text-lg font-semibold'>Cart</p>
    
                    <div className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-300 dark:bg-[#0e0e10] rounded-md hover:scale-105 ease-in duration-300 transition-all cursor-pointer text-base' onClick={() => handleclearCart()}>
                        Clear <MdRemoveShoppingCart/> {''}
                    </div>
                </div>
    
                    {cart.cartItems.length === 0 ? (
                        <div className='flex items-center justify-center flex-col py-16 p-5'>
                            <img src={emptycart} alt="/" />
                            <div className='text-2xl py-2'>Your Cart is currently Empty</div>
                            <div>
                                <Link to='/shoppage' className='cursor-pointer underline text-[#986c55]' onClick={toggleCart}>
                                    <MdOutlineKeyboardBackspace className='inline mr-1'/>Start Shopping
                                </Link>
                            </div>
                        </div>
                        
                    ) :(
                        <div className='w-full h-full flex flex-col'>
                            <div className='w-full px-6 py-2 h-[48%] lg:h-[58%] flex flex-col gap-3 overflow-y-scroll'>
                                {cart.cartItems?.map(cartItem => (
                                    <div className='w-full p-1 px-2 rounded-lg bg-[#f5f5f5] dark:bg-[#0e0e10] flex items-center gap-2' key={cartItem._id}>
                                        <div>
                                            <img src={cartItem.images?.[0]} alt={cartItem.title} className='w-20 h-20 max-w-[60px] rounded-md object-contain' />
                                        </div>
        
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-base font-bold'>{cartItem.brand.toUpperCase()}</p>
                                            <p className='text-sm font-semibold'>{cartItem.currency + " " + (cartItem.price * cartItem.cartQuantity).toLocaleString()}</p>
                                            <p className='text-xs cursor-pointer flex items-center gap-1' onClick={() => handleRemoveFromCart(cartItem)}>Remove <TbTrashX/></p>
                                        </div>
        
                                        <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                                            <div onClick={() => handleDecreaseCart(cartItem)}><BiMinus/></div>
                                            <p className='w-5 h-5 rounded-sm flex items-center justify-center bg-slate-300 dark:bg-[#1f1d1d]'>{cartItem.cartQuantity}</p>
                                            <div onClick={() => handleIncreaseCart(cartItem)}><BiPlus/></div>
                                        </div>
                                    </div>
                                ))}    
                            </div>

                            <div className='w-full gap-4 md:gap-3 bg-[#f5f5f5] dark:bg-[#0e0e10] flex flex-col items-center justify-evenly px-8 rounded-md py-5 xl:py-0'>
                                <div className='w-full flex items-center justify-between'>
                                    <p className='text-lg'>Sub Total</p>
                                    <p className='text-lg'>NGN {cart.cartTotalAmount.toLocaleString()}</p>
                                </div>
                                <div className='w-full flex items-center justify-between'>
                                    <p className='text-lg'>Shipping</p>
                                    <p className='text-lg'>Free</p>
                                </div>
        
                                <div className='w-full border-b border-gray-600 my-1 lg:my-2 '></div>
        
                                <div className='w-full flex items-center justify-between'>
                                    <p className='text-xl font-semibold'>Total</p>
                                    <p className='text-xl font-semibold'>NGN {cart.cartTotalAmount.toLocaleString()}</p>
                                </div>
                                
                                {auth._id ? 
                                    (<div className='w-full p-2 rounded-full bg-[#986c55] text-lg my-2 hover:shadow-lg hover:scale-105 ease-in duration-300 transition-all cursor-pointer text-center' onClick={toggleCart}>
                                        <Link to='/checkout'>Proceed to Checkout</Link>
                                    </div>) 
                                    : (
                                        <div className='w-full p-2 rounded-full bg-[#986c55] text-lg my-2 hover:shadow-lg hover:scale-105 ease-in duration-300 transition-all cursor-pointer text-center' onClick={toggleCart}><Link to='/login'>Proceed to Checkout</Link></div>
                                    )}
                                
                            </div>
                        </div>
                    )}

            </div>
        </div>
    )
}

export default CartPage