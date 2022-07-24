import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearCart, getTotals } from '../slices/cartSlice'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {AiOutlineClose} from 'react-icons/ai'
import { ClipLoader } from 'react-spinners'
import { usePaystackPayment } from 'react-paystack';



const Checkout = () => {
    const cart = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    localStorage.getItem('cartItems')

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const truncateString = (str, num) => {
        if (str?.length > num) {
         return str.slice(0, num) + '...';
        } else{
          return str
      }
    }

    const initialValue = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        state: '',
        address: '',
        country: '',
        city:'',
      };

      const [user, setUser] = useState(initialValue)
      const [errors, setErrors] = useState({})
      const [isSubmit, setIsSubmit] = useState(false)
      const [isOpen, setIsOpen] = useState(false);
      const [modal, setModal] = useState([]);
      const [loading, setLoading] = useState(false);

      const handleChange = (e) => {
        const { name, value} = e.target;
        setUser({...user, [name]: value})
        // console.log(user);
      }
    
      const validate = (values) => {
          const errorss = {};
          if (!values.first_name) {
            errorss.first_name = 'First Name is Required!'
          }
          if (!values.last_name) {
            errorss.last_name = 'Last Name is Required!'
          }
          if (!values.country) {
            errorss.country = 'Country is Required!'
          }
          if (!values.state) {
            errorss.state = 'State is Required!'
          }
          if (!values.address) {
            errorss.address = 'Street Address is Required!'
          }
          if (!values.city) {
            errorss.city = 'City is Required!'
          }
          if (!values.phone) {
            errorss.phone = 'Phone Number is Required!'
          }
          if (!values.email) {
            errorss.email = 'Email Address is Required!'
          }
          
          return errorss;
      }
    
      useEffect(() => {
        // console.log(errors);
        if (Object.keys(errors).length === 0 && isSubmit) {
        //   console.log(user);
        }
      }, [errors])

      function closeModal() {
        setIsOpen(false);
      }

    const handleCheckout = async (e) => {
        e.preventDefault();
        setErrors(validate(user));
        setIsSubmit(true);
        try{
            await axios.post('https://thegorana.herokuapp.com/orders/', 
            {
                orders: cart.cartItems.map((cartItem) => {
                    return {
                        product_id: cartItem._id,
                        quantity: cartItem.cartQuantity,
                        size: cartItem.brand,
                    };
                }),
                state: user.state,
                address: user.address    
            },
            {
                headers: {
                    Authorization: `${auth.token}`,
                },
            },
            setLoading(true)
            )
            .then((response) => {
                console.log(response.data);
                if (response.data.success){
                    setIsOpen(true);
                    setLoading(false)
                } 
                setModal(response.data)
            })
        }
        catch(error) {
            console.log(error.response.data);
        }
    }

    const handleclearCart = () => {
        dispatch(clearCart())
    }

    const config = {
        reference: modal.transaction_reference,
        amount:  modal.price * 100,
        publicKey: 'pk_test_ec28501e234f6e2d802dc2a156c2511abd2d0527',
        email: user.email,
    };

    // you can call this function anything
    const onSuccess = (response) => {
        // Implementation for whatever you want to do after success call.
        handleclearCart();
        navigate('/')
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        navigate('/checkout')
    }

    const Paystack = () => {
        const initializePayment = usePaystackPayment(config);
        return (
          <div>
              <button className='w-full my-4 p-3 bg-button text-white rounded-lg' onClick={() => {
                  initializePayment(onSuccess, onClose)
              }}>Pay NGN {modal.price}</button>
          </div>
        );
    };


  return (
    <div>
        <div className='max-w-[1240px] m-auto pt-5'>
            <div className='w-full py-16 p-2'>
                <div className='w-full bg-[#986c55] px-8 py-6'>
                    <p className='font-bold'>
                        <Link to='/' className='cursor-pointer'>Home</Link> / <Link to='/shoppage'>Shop</Link> / <span>Checkout </span>
                    </p>
                </div>
                <div className='py-2'>
                    <p>Have a coupon? Click <span className='text-[#986c55] underline cursor-pointer'>here</span> to enter your code</p>
                </div>

                <div className='grid md:grid-cols-8 md:gap-8 py-6'>
                    <div className='col-span-5'>
                        <h1 className='text-3xl font-bold'>Billing Details</h1>
                        <div className='py-4'>
                            <form onSubmit={handleCheckout}>
                                <div className='grid md:grid-cols-2 md:gap-8'>
                                    <div className='my-4'>
                                        <label>First Name*</label>
                                        <div className='my-2 w-full relative'>
                                            <input 
                                                className='w-full p-2 border border-gray-400 bg-gray-200 dark:bg-[#0e0e10]'
                                                type="text" 
                                                placeholder='Enter First Name'
                                                name='first_name'
                                                value={user.first_name} 
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <p className='text-sm text-red-600'>{errors.first_name}</p>
                                    </div>

                                    <div className='my-2 md:my-4'>
                                        <label>Last Name*</label>
                                        <div className='my-2 w-full relative'>
                                            <input
                                                className='w-full p-2 border border-gray-400 bg-gray-200 dark:bg-[#0e0e10]' 
                                                type="text" 
                                                placeholder='Enter Last Name'
                                                name='last_name'
                                                value={user.last_name} 
                                                onChange={handleChange} 
                                            
                                            />
                                        </div>
                                        <p className='text-sm text-red-600'>{errors.last_name}</p>
                                    </div>
                                </div>
                                <div className='my-2'>
                                    <label>Company Name(optional)</label>
                                    <div className='my-2 w-full relative'>
                                        <input
                                            className='w-full p-2 border border-gray-400 bg-gray-200 dark:bg-[#0e0e10]' 
                                            type="text" 
                                            placeholder='Company name' 
                                        />
                                    </div>
                                </div>
                                <div className='my-5'>
                                    <label>Country*</label>
                                    <div className='my-2 w-full relative'>
                                        <input
                                            className='w-full p-2 border border-gray-400 bg-gray-200 dark:bg-[#0e0e10]' 
                                            type="text" 
                                            required
                                            placeholder='Name of Country'
                                            name='country'
                                            value={user.country} 
                                            onChange={handleChange} 
                                
                                        />
                                    </div>
                                    <p className='text-sm text-red-600'>{errors.country}</p>
                                </div>
                                <div className='my-5'>
                                    <label>Street Address*</label>
                                    <div className='my-2 w-full relative'>
                                        <input
                                            className='w-full p-2 border border-gray-400 bg-gray-200 dark:bg-[#0e0e10]' 
                                            type="text" 
                                            required
                                            placeholder='House number and street name' 
                                            name='address'
                                            value={user.address} 
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <p className='text-sm text-red-600'>{errors.address}</p>

                                    <div className='mt-5 w-full relative'>
                                        <input
                                            className='w-full p-2 border border-gray-400 bg-gray-200 dark:bg-[#0e0e10]' 
                                            type="text" 
                                            placeholder='Apartment, suite, unit, etc.(optional)' 
                                
                                        />
                                    </div>
                                </div>
                                <div className='grid md:grid-cols-2 md:gap-8'>
                                    <div className='my-2'>
                                        <label>Town/City*</label>
                                        <div className='my-2 w-full relative'>
                                            <input 
                                                className='w-full p-2 border border-gray-400 bg-gray-200 dark:bg-[#0e0e10]'
                                                type="text" 
                                                name='city'
                                                value={user.city} 
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <p className='text-sm text-red-600'>{errors.city}</p>
                                    </div>

                                    <div className='my-2'>
                                        <label>State*</label>
                                        <div className='my-2 w-full relative'>
                                            <input
                                                className='w-full p-2 border border-gray-400 bg-gray-200 dark:bg-[#0e0e10]' 
                                                type="text" 
                                                name='state'
                                                value={user.state} 
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <p className='text-sm text-red-600'>{errors.state}</p>
                                    </div>
                                </div>
                                <div className='grid md:grid-cols-2 md:gap-8'>
                                    <div className='my-2'>
                                        <label>Phone Number*</label>
                                        <div className='my-2 w-full relative'>
                                            <input 
                                                className='w-full p-2 border border-gray-400 bg-gray-200 dark:bg-[#0e0e10]'
                                                type="text" 
                                                name='phone'
                                                value={user.phone} 
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <p className='text-sm text-red-600'>{errors.phone}</p>
                                    </div>

                                    <div className='my-2'>
                                        <label>Zip</label>
                                        <div className='my-2 w-full relative'>
                                            <input
                                                className='w-full p-2 border border-gray-400 bg-gray-200 dark:bg-[#0e0e10]' 
                                                type="text" 
                    
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='my-5'>
                                    <label>Email Address*</label>
                                    <div className='my-2 w-full relative'>
                                        <input
                                            className='w-full p-2 border border-gray-400 bg-gray-200 dark:bg-[#0e0e10]' 
                                            type="text" 
                                            name='email'
                                            value={user.email} 
                                            onChange={handleChange}
                        
                                        />
                                    </div>
                                    <p className='text-sm text-red-600'>{errors.email}</p>
                                </div>
                                <div className='my-5'>
                                    <label>Order notes(optional)</label>
                                    <textarea 
                                        rows="7" 
                                        placeholder="Notes about your order, e.g. special notes for delivery" 
                                        className='w-full p-2 border border-gray-400 bg-gray-200 dark:bg-[#0e0e10]'>  
                                    </textarea>
                                </div>
                                
                            </form>

                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div className='bg-gray-200 dark:bg-[#0e0e10] p-5 border border-dotted border-[#986c55]'>
                            <h1 className='text-3xl font-bold'>Your Order</h1>
                            <div className='border border-[#986c55] my-2'></div>
                            <table className=' border-collapse w-full mt-5'>
                                <thead>
                                    <tr>
                                        <th className='text-start text-lg'>Product</th>
                                        <th className='text-lg text-end'>Total (NGN)</th>
                                    </tr>
                                </thead>
                                
                                
                                <tbody>
                                    {cart.cartItems.map(cartItem => (
                                        <tr key={cartItem._id} className='border-b border-[#986c55] overflow-hidden'>
                                            <td className='flex items-center gap-4 py-2'>
                                                <img src={cartItem.images?.[0]} alt={cartItem.title} className='w-20 h-20 max-w-[60px] rounded-md object-contain' />
                                                <div className='flex flex-col gap-4'>
                                                    <div>{truncateString(cartItem.name, 20)}</div>
                                                    <div>Qty: {cartItem.cartQuantity}</div>
                                                </div>
                                            </td>
                                            <td className='text-end'>{(cartItem.price * cartItem.cartQuantity).toLocaleString()}</td>
                                        </tr>
                                    ))}

                                    <tr>
                                        <td className='py-2 pt-5 font-bold text-lg'>Sub Total: </td>
                                        <td className='text-end font-bold text-lg'>{cart.cartTotalAmount.toLocaleString()}</td>
                                    </tr> 
                                    <tr className='border-b-2 border-[#986c55]'>
                                        <td className='py-2 font-bold text-lg'>Shipping Fee: </td>
                                        <td className='text-end font-bold text-lg'>Free</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 font-bold text-lg'>Total: </td>
                                        <td className='text-end font-bold text-lg'>{cart.cartTotalAmount.toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                             
                            <div className='w-full border border-[#986c55] p-2 bg-transparent hover:bg-[#986c55] text-lg text-[#986c55] hover:text-white my-2 cursor-pointer text-center' onClick={handleCheckout}>{loading ? <ClipLoader size={20} /> : 'Place Order'}</div>
                        </div>       
                    </div>
                </div>
            </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[100] overflow-y-auto right-0 top-0 w-full h-screen bg-black/70"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#F5F5F5] dark:bg-[#121212] shadow-xl rounded-2xl relative">
                <Dialog.Title
                  as="h3"
                  className="text-3xl font-bold text-center text-[#986c55] border-b"
                >
                  Success
                </Dialog.Title>
                <div className="my-4">
                  <p className="text-base text-gray-500 dark:text-slate-100 pt-2">
                    Successfully created order
                  </p>
                </div>
                <div className='my-4'>
                    <p className='text-base text-gray-500 dark:text-slate-100 pt-2'>
                        Your order: {modal.transaction_reference} has been placed successfully
                    </p>
                </div>

                <div>
                    <Paystack />
                </div>

                <div className="absolute top-5 right-10">
                  <button
                    type="button"
                    className=" rounded-md hover:scale-105 ease-in duration-300 transition-all cursor-pointer"
                    onClick={closeModal}
                  >
                    <AiOutlineClose size={22}/>
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Checkout