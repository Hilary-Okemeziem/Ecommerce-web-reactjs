import React, { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'
import FadeLoader from "react-spinners/FadeLoader";
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';


const ProductPage = (rowID) => {
    const [product, setProduct] = useState([])
    const {productId} = useParams()
    const [loading, setLoading] = useState(false);

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

    const [imgIndex, setImgIndex] = useState(0)

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
               <div className='grid md:grid-cols-2 gap-8 p-4'>
                    <div>
                        <div className='flex items-center justify-center'>
                        <img src={product.images?.[imgIndex]} alt="" width={300} className='rounded-md hover:scale-105 ease-in duration-300 max-w-full h-auto' />
                        </div>

                        <div id={'slider' + rowID} className='w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                            <div className='flex items-center h-full w-full py-4 relative'>
                                <img src={product.images?.[0]} width={130} alt={product._id} onClick={() => setImgIndex(0)} className='rounded-md px-1 hover:scale-105 ease-in duration-300 cursor-pointer'  />
                                <img src={product.images?.[1]} width={130} alt={product._id} onClick={() => setImgIndex(1)} className='rounded-md px-1 hover:scale-105 ease-in duration-300 cursor-pointer'  />
                                <img src={product.images?.[2]} width={130} alt={product._id} onClick={() => setImgIndex(2)}  className='rounded-md px-1 hover:scale-105 ease-in duration-300 cursor-pointer'  />
                                <img src={product.images?.[3]} width={130} alt={product._id} onClick={() => setImgIndex(3)} className='rounded-md px-1 hover:scale-105 ease-in duration-300 cursor-pointer'  />  
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
                                <div className='bg-button text-btnText dark:text-white px-9 py-2 rounded-md shadow-md hover:shadow-xl cursor-pointer' onClick={() => handleAddToCart(product)}>Add to Cart</div>
                            </div>
                            {/* <div>
                                <div className='border border-[#986c55] text-black dark:text-white px-5 py-2 rounded-md shadow-md hover:shadow-xl cursor-pointer hover:bg-button ml-5'>Save to wishlist</div>
                            </div> */}
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