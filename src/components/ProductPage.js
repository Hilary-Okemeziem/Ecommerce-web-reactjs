import React, { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'
import FadeLoader from "react-spinners/FadeLoader";
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
// import { addItem, delItem } from '../redux/action/index';
// import { actionType } from '../redux/reducer/handleCart';

const ProductPage = (rowID) => {
    const [product, setProduct] = useState([])
    const {productId} = useParams()
    const [loading, setLoading] = useState(false);
    // const [cartBtn, setCartBtn] = useState('Add to Cart');

    // const dispatch = useDispatch();
        
    // const addCart = (product) => {
    //     if (cartBtn === 'Add to Cart'){
    //         dispatch({
    //             type : actionType.SET_CARTITEMS,
    //             cartItems: [...product]
    //         })
    //         dispatch(addItem(product));
    //         setCartBtn('Remove from Cart')
    //     } else{
    //         dispatch(delItem(product));
    //         setCartBtn('Add to Cart')
    //     }

    // }

    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const url =  `https://thegorana.herokuapp.com/products/${productId}`
  
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            axios.get(url).then((response) => {
            setProduct(response.data)
            console.log(response.data);
            setLoading(false)
      })
        }
        getProduct();
    }, [url]);

    const Loading = () => {
        return (
            <div className='flex items-center justify-center'>
                <FadeLoader color={'#986c55'} loading={loading} size={150} />
                <p className='text-2xl '>Loading Products...</p>
            </div>
        )
    }

    const ShowProduct = () => {
        return (
            <div>
               <div className='grid lg:grid-cols-2 gap-8 p-4'>
                    <div>
                        <div className='flex items-center justify-center'>
                            <img src={product.images?.[0]} alt={product._id} width={300} id='mainImg' className='rounded-md hover:scale-105 ease-in duration-300 max-w-full h-auto' />
                        </div>

                        <div id={'slider' + rowID} className='w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                            <div className='flex items-center h-full w-full py-4 relative'>
                                <img src={product.images?.[1]} width={130} alt={product._id} className='rounded-md px-1 hover:scale-105 ease-in duration-300 small-img'  />
                                <img src={product.images?.[2]} width={130} alt={product._id} className='rounded-md px-1 hover:scale-105 ease-in duration-300 small-img'  />
                                <img src={product.images?.[3]} width={130} alt={product._id} className='rounded-md px-1 hover:scale-105 ease-in duration-300 small-img'  />
                                <img src={product.images?.[4]} width={130} alt={product._id} className='rounded-md px-1 hover:scale-105 ease-in duration-300 small-img'  />  
                            </div>    
                        </div>
                    </div>

                    <div className='flex flex-col items-start justify-start py-8'>
                        <div>
                            <p className='text-sm'><Link to='/' className='cursor-pointer'>Home</Link> / <span>{product.brand}</span></p>
                        </div>
                        <div className='py-5'>
                            <h2 className='text-xl font-bold'>{product.name}</h2>
                        </div>
                        <div className='font-bold text-xl text-black dark:text-white py-5'>
                            {product.currency + " " + product.price?.toLocaleString()}
                        </div>
                        
                        <div className='flex items-center'>
                            <div>
                                <select className='my-3 border border-[#986c55] p-2 rounded-md '>
                                    <option>Select Size</option>
                                    <option>XL</option>
                                    <option>XXl</option>
                                    <option>Large</option>
                                    <option>Medium</option>
                                    <option>Small</option>
                                </select>  
                            </div>
                            
                            <div>
                                <div className='bg-button text-btnText dark:text-white px-5 py-2 rounded-md shadow-md hover:shadow-xl cursor-pointer ml-5' onClick={() => handleAddToCart(product)}>Add to Cart</div>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-bold text-xl py-4'>Product Detials</h1>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }


  return (
    <div className='max-w-[1240px] m-auto' >
        <div className='pt-[5rem] w-full p-2'>
            <div>{loading ? <Loading/> : <ShowProduct/>}</div>
        </div>
    </div>
    
  )
}

export default ProductPage