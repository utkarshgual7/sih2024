import React from 'react'
import Group from '../Assets/Group.png'
import pngwing from '../Assets/pngwing.png'
import image from '../Assets/image.png'
import Line from '../Assets/Line.png'
const Navbar = () => {
    return (
        <div>
        <div className='flex flex-row justify-between'>

            <div className='flex flex-row'>
                <img className='w-[644px] h-[199px] top-[23px] left-[38px] border' src={Group} alt='logo' />
            </div>

            <div className='flex flex-row mr-36'>
                <img className='w-[233px] h-[146px] top-[75px] left-[1475px]' src={image} alt='' />
                <img className='w-[105px] h-[180px] top-[51px] left-[1734px]' src={pngwing} alt='' />
            </div>
        </div>
        <img className='w-[1951px] top-[273.47px] border rotate-{0.13}' src={Line} alt=''/>
        </div>

    )
}

export default Navbar