import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();

  return (
    <div className='h-[34vw] mt-5 rounded-3xl relative' style={{ backgroundImage: `url(${assets.header_img})` }}>
        <div className="flex flex-col items-start absolute bottom-[10%] gap-1.5 max-w-[50%] left-[6vw]">
            <h2 className='md:font-semibold text-white md:text-[20px]'>Order your favourite food here</h2>
            <p className='text-white text-[1vw] hidden md:block'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
            <button className='px-4 py-1 bg-white text-black rounded-full mt-2' onClick={()=>{navigate('/menu'); scrollTo(0, 0)} }>View Menu</button>
        </div>
    </div>
        
  )
}

export default Banner
