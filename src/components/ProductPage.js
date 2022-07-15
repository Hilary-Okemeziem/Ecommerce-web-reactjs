import React, { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'
import FadeLoader from "react-spinners/FadeLoader";

const ProductPage = (rowID) => {
    const [product, setProduct] = useState([])
    const {productId} = useParams()
    const [loading, setLoading] = useState(false);

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
            <div className='flex items-center justify-center w-full h-screen'>
                <FadeLoader color={'#986c55'} loading={loading} size={150} />
                <p className='text-2xl '>Loading Products...</p>
            </div>
        )
    }

    const ShowProduct = () => {
        return (
            <div className='py-12 lg:h-screen'>
               <div className='grid lg:grid-cols-2 gap-8 shadow-md shadow-gray-300 bg-[#f5f5f5] dark:shadow-black dark:bg-[#0e0e10] rounded-xl p-4 my-8'>
                    <div>
                        <div className='flex items-center justify-center'>
                            <img src={product.images?.[0]} width={270} alt={product._id} className='rounded-lg hover:scale-105 ease-in duration-300' />
                        </div>

                        <div id={'slider' + rowID} className='w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                            <div className='flex items-center justify-between h-full w-full px-4 py-4 relative'>
                                <img src={product.images?.[1]} width={150} alt={product._id} className='rounded-lg px-1 hover:scale-105 ease-in duration-300'  />
                                <img src={product.images?.[2]} width={150} alt={product._id} className='rounded-lg px-1 hover:scale-105 ease-in duration-300'  />
                                <img src={product.images?.[3]} width={150} alt={product._id} className='rounded-lg px-1 hover:scale-105 ease-in duration-300'  />
                                <img src={product.images?.[4]} width={150} alt={product._id} className='rounded-lg px-1 hover:scale-105 ease-in duration-300'  />  
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
                        <div className='py-5'>
                            <form action="">
                                <select>
                                    <option value="grapefruit">S</option>
                                    <option value="lime">M</option>
                                    <option selected value="coconut">L</option>
                                    <option value="mango">XL</option>
                                </select>
                            </form>
                        </div>
                        <div className='py-5'>
                            <div className='bg-button text-btnText dark:text-white px-5 py-2 rounded-lg shadow-lg hover:shadow-2xl flex items-center justify-between cursor-pointer'>Add to Cart</div>
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
    <div className='pt-[5rem]' >
        <div className='max-w-[1240px] m-auto'>
            <div>{loading ? <Loading/> : <ShowProduct/>}</div>
        </div>
    </div>
    
  )
}

export default ProductPage