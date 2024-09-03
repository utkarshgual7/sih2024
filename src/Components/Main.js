import React from 'react'
import image9 from '../Assets/image9.png'

const Main = () => {
  return (
    <div className='flex flex-row'>
      <div>
        <h1 className='w-[405px] h-[50px] top-[320px] left-[111px] leading-[50px] text-center text-[30px] mt-[15px] ml-14'>Create a new account</h1>
        <div className='w-[926px] h-[579px] top-[417px] left-[186px] mt-[25px]'>
          <p className='ml-[150px]'>*indicates a required field</p>
          <div>
            <h4 className='ml-[150px] font-bold mt-1'>personal Details</h4>
            <form className='bg-gray-300 w-[90%] p-4 ml-[150px] h-[430px] flex flex-col' action='' method=''>
              <div>
                <label className='text-[20px]' for="User">User ID:</label>
                <input className='border rounded-sm ml-[200px] border-black h-8 w-[45%] py-2 px-3' type="text" id="User"
                  name="User" required></input>
                <button className='bg-[#FF0000] p-1 text-white ml-1 rounded-sm px-4 py-2' > Check Availability</button>
              </div>
              <br />
              <div className='flex flex-row'>
                <label className='text-[20px] block' for="fname">First Name:</label>
                <select
                  className="border rounded w-44 h-[40px] py-2 px-3 ml-[210px] text-gray-700"
                  required
                >

                  <option value="" disabled selected hidden>Select Title</option>
                  <option value="Mr">Mr.</option>
                  <option value="Mrs">Mrs.</option>
                  <option value="Other">Other</option>
                </select>
                <input className='border-2 rounded-sm ml-[10px] border-black h-10 py-2 px-3 w-[100%]' type="text" id="fname"
                  name="fname" required></input>
              </div>
              <br />

              <div>
                <label className='text-[20px]' for="lname">Last Name:</label>
                <input className='border rounded-sm ml-[270px] border-black h-8 py-2 px-3 w-[65%]' type="text" id="lname"
                  name="lname" required></input>
              </div>
              <br />

              <div>
                <label className='text-[20px]' for="email">Email:</label>
                <input className='border rounded-sm ml-[270px] border-black h-8 py-2 px-3 w-[65%]' type="text" id="email"
                  name="email"
                  placeholder="Enter your email" required></input>
              </div>
              <br />

              <div>
                <label className='text-[20px] mt-6' for="number">Mobile:</label>

                <span className="border rounded-l py-2 px-3 bg-gray-200 ml-[200px]">+91</span>
                <input type="text"
                  required
                  className="border rounded-r w-[58%] py-2 px-3 text-gray-700" />



              </div>
            </form>
          </div>
          <p className='ml-[150px] mt-2'>I accept <a href='#'>Terms and Conditions</a></p>
          <div className='flex flex-row justify-end mr-[-60px] mt-3'>
            <button className='bg-[#FF0000] p-1 text-white ml-1 rounded-medium'>Register</button>
            <button className='bg-[#FF0000] p-1 text-white ml-2 rounded-medium'>Reset</button>
            <button className='bg-[#FF0000] p-1 text-white ml-2 rounded-medium'>Cancel</button>
          </div>
        </div>
      </div>

      <div>
        <img className='w-[750px] h-[640px] top-[528px] left-[1246px] mt-[180px] ml-48' src={image9} alt='' />
      </div>
    </div>

  )
}

export default Main