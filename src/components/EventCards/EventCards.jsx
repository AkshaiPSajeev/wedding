import React from 'react'

const EventCards = () => {
  return (
    <>
    <div className='border rounded-md mt-4 div-box'>
        <div className='flex'>
            <div>
                <h4 className='font-semibold'>Mehendi</h4>
            </div>
            <div className='ml-16'>
                <h3 className='text-inside'>Dress code</h3>
            </div>
        </div>
        <div className='flex mt-4'>
            <div><span className='text-inside'>Time</span></div>
            <div className='ml-20 text-inside'><span>Date</span></div>
            <div className='ml-20 text-inside'><span>Men</span></div>
            <div className='ml-20 text-inside'><span>Women</span></div>
        </div>
        <div className='flex justify-between mt-6'>
            <div><span className='text-inside'>venue</span></div>
            <div>
                <div className='bg-gradient-to-r from-red-400 via-red-500 to-red-600 pt-1 pr-2 pb-1 pl-2'>
                <h5 className='text-white text-[10pt]'>Gallery</h5>
                 <h3 className='text-white  font-semibold text-sm'>2375 Images</h3>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default EventCards