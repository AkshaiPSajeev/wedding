import React from 'react'
import {useSelector} from 'react-redux'
import {WiMoonFull} from 'react-icons/wi'

const Details = () => {
    let headingStyle="font-semibold text-2xl"
    const{dark}=useSelector((store)=>store.dark);

  return (
    <>
    <div className={`${dark?'bg-black':'bg-white'} rounded md mt-5 mr-10 pl-8 pt-8 pr-8 pb-8`} >
        <h2 className={`${dark?'text-white font-semibold text-2xl':headingStyle} `}>Details</h2>
        <div className='mt-4'>
            <div className='flex justify-between'>
                <div className='flex border rounded-md div-box  pr-8'>
                    <div className=' '>
                        <h4 className='text-inside'>Hashtag</h4>
                        <p className={`card-headings mt-2 ${dark&&'text-white'}`}>Enter your hashtag here</p>
                    </div>
                    <div className='ml-8 relative'>
                        <div className='absolute ml-9 mt-3 text-[8pt] text-gray-700'>Upload Logo</div>
                        <div className='bg-gray-200 rounded-full pt-3 pb-6 pr-6 pl-6 ml-6 text-gray-200'>
                            u
                        </div>
                    </div>
                </div>
                <div className='border rounded-md div-box pr-8'>
                    <h4 className='text-inside'>Users</h4>
                    <p className={`card-headings mt-2 ${dark&&'text-white'}`}>235 Users</p>
                </div>
                <div className='border rounded-md div-box pr-8'>
                    <h4 className='text-inside'>Select Color</h4>
                    <div className='flex justify-between mt-1 '>
                        <div className='flex'>
                            <div className='mt-1'><WiMoonFull className='text-red-600'/></div>
                            <div className='ml-1'> <span className={`card-headings  ${dark&&'text-white'}`}>Primary</span></div>
                        </div>
                        <div className='flex ml-4'>
                            <div className='mt-1'><WiMoonFull  className='text-red-600'/></div>
                            <div className='ml-1'> <span className={`card-headings  ${dark&&'text-white'}`}>Secondary</span></div>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
            <div className='flex mt-4 justify-between '>
                <div className='rounded-md border div-box pr-12'>
                    <h4 className='text-inside '>Bride's Name</h4>
                    <h3 className={`card-headings  ${dark&&'text-white'}`}>Enter your hashtag here</h3>
                </div>
                <div className='rounded-md border div-box  pr-12'>
                    <h4 className='text-inside'>Groom's Name</h4>
                    <h3 className={`card-headings mt-1 ${dark&&'text-white'}`}>Enter your hashtag here</h3>
                </div>
                <div className='rounded-md border div-box pr-12'>
                    <h4 className='text-inside'>Wedding Date</h4>
                    <h3 className={`card-headings mt-1 ${dark&&'text-white'}`}>12/10/2021</h3>

                </div>

            </div>
            <div className='flex mt-4 justify-between'>
                <div className='rounded-md border div-box pr-8'>
                    <h4 className='text-inside'>Wedding Venue</h4>
                    <h3 className={`card-headings mt-1 ${dark&&'text-white'}`}>Enter your Venue's address here for the wedding</h3>
                </div>
                <div className='rounded-md border div-box text-inside pr-8'>
                    upload wedding invite
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Details