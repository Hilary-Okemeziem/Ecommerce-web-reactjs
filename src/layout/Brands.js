import React from 'react'
import adidas from '../images/adidas.jpg'
import defacto from '../images/defacto.png'
import generation from '../images/generation.jpg'
import hm from '../images/hm.png'
import justshoes from '../images/justshoes.jpg'
import megir from '../images/megir.png'
import minifocus from '../images/minifocus.png'
import sedge from '../images/sedge.png'
import skmei from '../images/skmei.png'
import zanzea from '../images/zanzea.png'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md' 


const Brands = ({rowID}) => {
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }
  return (
    <div className='w-full py-16 p-2'>
        <div className='flex items-center justify-center'>
            <h1 className='text-3xl text-[#986c55] tracking-widest font-bold uppercase heading'>Fashion Brands</h1>
        </div>

        <div className='relative flex items-center justify-between group py-8 '>
            <MdChevronLeft onClick={slideLeft} size={30} className='bg-black rounded-full absolute opacity-50 cursor-pointer z-10 hidden group-hover:block left-0'/>
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                <div className='flex items-center justify-between h-full w-full px-4 relative'>
                        <img src={generation} alt="/" className='hover:scale-110 ease-in duration-200' />
                        <img src={defacto} alt="/" className='hover:scale-110 ease-in duration-200' />
                        <img src={hm} alt="/" className='hover:scale-110 ease-in duration-200'/>
                        <img src={justshoes} alt="/" className='hover:scale-110 ease-in duration-200'/>
                        <img src={megir} alt="/" className='hover:scale-110 ease-in duration-200'/>
                        <img src={minifocus} alt="/" className='hover:scale-110 ease-in duration-200'/>
                        <img src={sedge} alt="/" className='hover:scale-110 ease-in duration-200'/>
                        <img src={skmei} alt="/" className='hover:scale-110 ease-in duration-200'/>
                        <img src={zanzea} alt="/" className='hover:scale-110 ease-in duration-200'/>
                        <img src={adidas} alt="/" className='hover:scale-110 ease-in duration-200'/>

                </div>    
            </div>
            <MdChevronRight onClick={slideRight} size={30} className='bg-black rounded-full absolute opacity-50 cursor-pointer z-10 hidden group-hover:block right-0'/>
        </div>
    </div>
  )
}

export default Brands