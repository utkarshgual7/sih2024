import React from 'react'
import time from '../Assets/time.png'
import image13 from '../Assets/image13.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
const Frame6 = () => {
    return (
        <div className="flex">
            {/* left */}
            <div>
                <h1 className='w-[549px] h-[62px] top-[153px] left-[43px] bg-gradient-to-r from-[#E85353] to-[#BE1515] bg-clip-text text-transparent text-4xl font-bold mt-3 ml-5'>
                    What's in your Package
                </h1>

                <div className='w-[738px] h-[669px] top-[254px] left-[43px] rounded-[89px] bg-gradient-to-r from-[#F3EBE5] to-[#E3CECE] ml-9 mt-3'>
                    <div className='relative'>
                        <input className='w-[298px] h-[59.33px] px-3 py-2 text-black border-2 border-black rounded-lg top-[295px] left-[148px] mt-9 ml-24 bold-placeholder' id='size' type='text' placeholder='Size of parcel' />
                        <FontAwesomeIcon className=' absolute right-[360px] top-1/2 transform text-3xl' icon={faCircleDown} />
                    </div>

                    <div className='relative'>
                        <input className='w-[298px] h-[59.33px] px-3 py-2 text-black border-2 border-black rounded-lg top-[295px] left-[148px] mt-10 ml-24 bold-placeholder' id='weight' type='text' placeholder='Weight' />
                        <FontAwesomeIcon className=' absolute right-[360px] top-1/2 transform text-3xl' icon={faCircleDown} />

                    </div>

                    <div className='relative'>
                        <input className='w-[298px] h-[59.33px] px-3 py-2 text-black border-2 border-black rounded-lg top-[295px] left-[148px] mt-10 ml-24 bold-placeholder' id='content type' type='text' placeholder='Parcel Content Type' />
                        <FontAwesomeIcon className=' absolute right-[360px] top-1/2 transform text-3xl' icon={faCircleDown} />

                    </div>

                    <br />
                    <br />
                    <br />
                    <div className='flex flex-row ml-12'>
                        <img src={time} alt='' />
                        <p className='ml-2 font-semibold text-4xl'>SELECT TIMINGS FOR DELIVERY</p>
                    </div>

                    <div className='relative'>
                        <input className='w-[298px] h-[59.33px] px-3 py-2 text-black border-2 border-black rounded-lg top-[295px] left-[148px] mt-7 ml-24 bold-placeholder' id='timing-slot' type='text' placeholder='SELECT TIME-Slot Frame' />
                        <FontAwesomeIcon className=' absolute right-[360px] top-1/2 transform text-3xl' icon={faCircleDown} />

                    </div>

                    <button className='bg-[#FF0000] rounded-2xl px-20 py-3 text-white font-bold text-center text-xl mt-[100px] ml-[200px]'>PROCEED</button>
                </div>


            </div>

            {/* right */}
            <div>
                <img className='w-[738px] h-[669px] top-[238px] left-[1073px] rounded-[87px] mt-[80px] ml-[320px]' src={image13}/>
            </div>
        </div>
    )
}

export default Frame6
