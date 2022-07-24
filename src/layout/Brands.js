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
import Marquee from 'react-fast-marquee'


const Brands = () => {
  return (
    <div className='w-full py-16 p-2'>
        <div className='flex items-center justify-center py-8'>
            <h1 className='text-3xl text-[#986c55] tracking-widest font-bold uppercase heading'>Fashion Brands</h1>
        </div>

        <Marquee pauseOnHover speed={45} className='scrollbar-hide'>
            <div><img src={generation} alt="/" className='hover:scale-110 ease-in duration-200' /></div>
            <div><img src={defacto} alt="/" className='hover:scale-110 ease-in duration-200' /></div>
            <div><img src={hm} alt="/" className='hover:scale-110 ease-in duration-200' /></div>
            <div><img src={justshoes} alt="/" className='hover:scale-110 ease-in duration-200' /></div>
            <div><img src={megir} alt="/" className='hover:scale-110 ease-in duration-200' /></div>
            <div><img src={minifocus} alt="/" className='hover:scale-110 ease-in duration-200' /></div>
            <div><img src={sedge} alt="/" className='hover:scale-110 ease-in duration-200' /></div>
            <div><img src={skmei} alt="/" className='hover:scale-110 ease-in duration-200' /></div>
            <div><img src={zanzea} alt="/" className='hover:scale-110 ease-in duration-200' /></div>
            <div><img src={adidas} alt="/" className='hover:scale-110 ease-in duration-200' /></div>
        </Marquee>
    </div>
  )
}

export default Brands