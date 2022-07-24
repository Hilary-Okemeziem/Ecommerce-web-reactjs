import React, { useEffect, useState} from 'react'
import axios from 'axios'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {Link} from 'react-router-dom'

const Recommended = ({rowID}) => {
    const [products, setProducts] = useState([])

    const url = 'https://thegorana.herokuapp.com/products/?page=5'
  
    useEffect(() => {
      axios.get(url).then((response) => {
        setProducts(response.data.results)
        console.log(response.data);
      })
    }, [url])
  
    const slideLeft = () => {
      let slider = document.getElementById('slider' + rowID)
      slider.scrollLeft = slider.scrollLeft - 500
  }

    const slideRight = () => {
      let slider = document.getElementById('slider' + rowID)
      slider.scrollLeft = slider.scrollLeft + 500
  }
  
      const truncateString = (str, num) => {
          if (str?.length > num) {
           return str.slice(0, num) + '...';
          } else{
            return str
        }
      }
  return (
    <div className='w-full py-16 p-2'>
        <div className='bg-[#986c55] w-full p-4'>
            <h1 className='text-3xl font-bold'>New Arrivals</h1>
        </div>

        <div className='relative flex items-center justify-between group'>
            <MdChevronLeft onClick={slideLeft} size={40} className='bg-[#ffffff] text-[#986c55] rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-[100] hidden group-hover:block left-0'/>
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
              {products?.map(product =>
                <Link key={product._id} to={`/products/${product._id}`}>
                  <div className='lg:hover:scale-105 ease-in duration-300 inline-block p-2 py-8'>
                    <img src={product.images[0]} alt={product.id} width={250} className='rounded-md'/>
                    <div className='flex items-start justify-between py-2'>
                      <div className='font-bold text-sm'>{product.brand.toUpperCase()}</div> 
                    </div>
                    <div>{truncateString(product.name, 25)}</div>
                    <div className='font-bold mt-3 text-black dark:text-white'>{product.currency + " " + product.price.toLocaleString()}</div>
                  </div>
                </Link>
                  )}
            </div>
            <MdChevronRight onClick={slideRight} size={40} className='bg-[#ffffff] text-[#986c55] rounded-full absolute hover:opacity-100 opacity-50 cursor-pointer z-[100] group-hover:block right-0'/>
        </div>
    </div>
  )
}

export default Recommended