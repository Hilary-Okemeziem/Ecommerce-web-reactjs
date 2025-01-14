import React, { useEffect, useState, useRef } from 'react'
import {FcFlashOn} from 'react-icons/fc'
import axios from 'axios'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {Link} from 'react-router-dom'


const FlashSale = ({rowID}) => {
  const Ref = useRef(null);
  
  const [timer, setTimer] = useState('00:00:00');

  const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / 1000 / 60 / 60) % 24);
      return {
          total, hours, minutes, seconds
      };
  }

  const startTimer = (e) => {
      let { total, hours, minutes, seconds } = getTimeRemaining(e);
      if (total >= 0) {
          setTimer(
              (hours > 9 ? hours : '0' + hours) + ':' +
              (minutes > 9 ? minutes : '0' + minutes) + ':'
              + (seconds > 9 ? seconds : '0' + seconds)
          )
      }
  }

  const clearTimer = (e) => {
      setTimer('00:00:00');

      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
          startTimer(e);
      }, 1000)
      Ref.current = id;
  }

  const getDeadTime = () => {
      let deadline = new Date();

      deadline.setSeconds(deadline.getSeconds() + 80000);
      return deadline;
  }

  useEffect(() => {
      clearTimer(getDeadTime());
  }, []);

  const [products, setProducts] = useState([])

  const url = "https://gorana.onrender.com/products/?page=2";

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.results)
      console.log(response.data);
    })
  }, [url])

    const slideLeft = () => {
      var slider = document.getElementById('slider' + rowID)
      slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
      var slider = document.getElementById('slider' + rowID)
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
        <div className='flex flex-col sm:flex-row items-center justify-between'>
            <div className='text-3xl text-[#644726] tracking-widest uppercase font-bold'>Flashsale</div>
            <div className='text-3xl text-end font-bold uppercase'>
              Ends In: <span className='text-red-600'> {timer}</span>
            </div>
        </div>

        <div className='relative flex items-center justify-between group'>
            <MdChevronLeft onClick={slideLeft} size={40} className='bg-[#ffffff] text-[#986c55] hover:opacity-100 rounded-full absolute opacity-50 cursor-pointer z-[100] hidden group-hover:block left-0'/>
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
                    <div><FcFlashOn className='absolute top-9' size={30}/></div>
                  </div>
                </Link>
                  )}
            </div>
            <MdChevronRight onClick={slideRight} size={40} className='bg-[#ffffff] text-[#986c55] hover:opacity-100 rounded-full absolute opacity-50 cursor-pointer z-[100] group-hover:block right-0'/>
        </div>        
    </div>
  )
}

export default FlashSale