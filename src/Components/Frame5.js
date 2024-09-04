import React from 'react'
import map1 from '../Assets/map1.png'
import map from '../Assets/map.png'
import phone1 from '../Assets/phone1.png'
import delivery1 from '../Assets/delivery1.png'
import email1 from '../Assets/email1.png'
const Frame5 = () => {
    return (
        <div className='flex'>
            {/* left */}
            <div>
                <h1 className='w-[549px] h-[62px] top-[153px] left-[43px] bg-gradient-to-r from-[#E85353] to-[#BE1515] bg-clip-text text-transparent text-4xl font-bold mt-3 ml-5'>
                    Kindly Fill in Delivery Details
                </h1>
                <div className='w-[938px] h-[780px] top-[254px] left-[43px] rounded-[89px] bg-gradient-to-r from-[#F3EBE5] to-[#E3CECE] ml-9  flex'>
                    <div>
                        <div className='flex flex-row'>
                            <img className='w-[34px] h-[36px] top-[261px] ml-10 mt-8' src={map1} alt='' />
                            <p className='text-[#000000] text-[36px] font-normal leading-[47.17px] mt-8 '>Pickup Address</p>
                        </div>
                        <div className=' relative mt-5'>
                            <label className='text-[20px] leading-[26.2px] ml-[72px] absolute' for="address">Address ( Flat No.<br />
                                <span className=''>Building/Apartment</span>)</label>
                            <input className='border rounded-sm ml-[320px] h-10 py-2 px-3 w-[25%] bg-[#e5cece]' type="text" id="lname"
                                name="lname" required></input>
                        </div>
                        <div className=' relative mt-5'>
                            <label className='text-[20px] leading-[26.2px] ml-[72px] absolute' for="Street">Street Name/Road
                            </label>
                            <input className='border rounded-sm ml-[320px] h-10 py-2 px-3 w-[25%] bg-[#e5cece]' type="text" id="lname"
                                name="lname" required></input>
                        </div>
                        <div className=' relative mt-5'>
                            <label className='text-[20px] leading-[26.2px] ml-[72px] absolute' for="AREA">AREA
                            </label>
                            <input className='border rounded-sm ml-[320px] h-10 py-2 px-3 w-[25%] bg-[#e5cece]' type="text" id="lname"
                                name="lname" required></input>
                        </div>
                        <div className=' relative mt-5'>
                            <label className='text-[20px] leading-[26.2px] ml-[72px] absolute' for="CITY">CITY
                            </label>
                            <input className='border rounded-sm ml-[320px] h-10 py-2 px-3 w-[25%] bg-[#e5cece]' type="text" id="lname"
                                name="lname" required></input>
                        </div>
                        <div className=' relative mt-5'>
                            <label className='text-[20px] leading-[26.2px] ml-[72px] absolute' for="PINCODE">
                                PINCODE</label>
                            <input className='border rounded-sm ml-[320px] h-10 py-2 px-3 w-[25%] bg-[#e5cece]' type="number" id="lname"
                                name="lname" required></input>
                        </div>

                        <div className='flex flex-row'>
                            <img className='w-[34px] h-[36px] top-[261px] ml-10 mt-8' src={delivery1} alt='' />
                            <p className='text-[#000000] text-[36px] font-normal leading-[47.17px] mt-8 '>Recipient Address</p>
                        </div>
                        <div className=' relative mt-5'>
                            <label className='text-[20px] leading-[26.2px] ml-[72px] absolute' for="address">Address ( Flat No.<br />
                                <span className=''>Building/Apartment</span>)</label>
                            <input className='border rounded-sm ml-[320px] h-10 py-2 px-3 w-[25%] bg-[#e5cece]' type="text" id="lname"
                                name="lname" required></input>
                        </div>
                        <div className=' relative mt-5'>
                            <label className='text-[20px] leading-[26.2px] ml-[72px] absolute' for="Street">Street Name/Road
                            </label>
                            <input className='border rounded-sm ml-[320px] h-10 py-2 px-3 w-[25%] bg-[#e5cece]' type="text" id="lname"
                                name="lname" required></input>
                        </div>
                        <div className=' relative mt-5'>
                            <label className='text-[20px] leading-[26.2px] ml-[72px] absolute' for="AREA">AREA
                            </label>
                            <input className='border rounded-sm ml-[320px] h-10 py-2 px-3 w-[25%] bg-[#e5cece]' type="text" id="lname"
                                name="lname" required></input>
                        </div>
                        <div className=' relative mt-5'>
                            <label className='text-[20px] leading-[26.2px] ml-[72px] absolute' for="CITY">CITY
                            </label>
                            <input className='border rounded-sm ml-[320px] h-10 py-2 px-3 w-[25%] bg-[#e5cece]' type="text" id="lname"
                                name="lname" required></input>
                        </div>
                        <div className=' relative mt-5'>
                            <label className='text-[20px] leading-[26.2px] ml-[72px] absolute' for="PINCODE">
                                PINCODE</label>
                            <input className='border rounded-sm ml-[320px] h-10 py-2 px-3 w-[25%] bg-[#e5cece]' type="number" id="lname"
                                name="lname" required></input>
                        </div>
                    </div>



                    <div>
                        <div className='mt-20'>
                            <p className='text-[#000000] text-[26px] font-normal leading-[27.17px] mt-8 '>Your Contact Details</p>
                            <div className='relative'>
                                <img className='absolute ml-[6px] mt-[24px] z-20' src={phone1} alt='' />
                                <span className="ml-[40px] mt-[24px] absolute z-20">+91</span>
                                <input type="text"
                                    required
                                    className="rounded-r w-[120%] py-2 px-3 absolute mr-[350px] z-10 bg-[#e5cece] mt-4" 
                                    style={{ paddingLeft: '80px' }}/>
                            </div>
                        </div>

                        <div className='mt-[340px]'>
                            <p className='text-[#000000] text-[26px] font-normal leading-[27.17px] mt-8 '>Recipient Contact Number  </p>
                            <div className='relative'>
                                <img className='absolute ml-[6px] mt-[24px] z-20' src={phone1} alt='' />
                                <span className="ml-[40px] mt-[24px] absolute z-20">+91</span>
                                <input type="text"
                                    required
                                    className="rounded-r w-[120%] py-2 px-3 absolute mr-[350px] z-10 bg-[#e5cece] mt-4"
                                    style={{ paddingLeft: '80px' }} />
                            </div>
                        </div>

                        <div className=''>
                            <p className='text-[#000000] text-[26px] font-normal leading-[27.17px] mt-[130px] '>Recipient Email ID </p>
                            <div className="relative">
                                <img className="absolute ml-[20px] mt-[24px] z-20" src={email1} alt="" />
                                <input
                                    type="email"
                                    required
                                    className="rounded-r w-[120%] py-2 pl-[60px] pr-[20px] absolute z-10 bg-[#e5cece] mt-4"
                                    style={{ paddingLeft: '65px' }} // Ensures cursor starts after +91
                                />
                            </div>
                        </div>
                    </div>
                </div>
                  
                  <button className='bg-[#FF0000] px-20 py-3 text-white ml-[300px] mt-[5px] rounded-[15px] '>Save Details and Proceed</button>
            </div>

            {/* right */}
            <div>
                <img className='w-[841px] h-[880px] mt-[40px] ml-[100px]' src={map}/>
            </div>
        </div>
    )
}

export default Frame5