import React from 'react'

const EventCards = () => {
  return (
    <>
    <div className='border rounded-md mt-4 div-box'>
        <div className='flex'>
            <div>
                <h4 className='card-headings'>Mehendi</h4>
            </div>
            <div className='ml-4'>
                <h3>Dress code</h3>
            </div>
        </div>
        <div className='flex mt-4'>
            <div><span>Time</span></div>
            <div className='ml-20'><span>Date</span></div>
            <div className='ml-20'><span>Men</span></div>
            <div className='ml-20'><span>Women</span></div>
        </div>
        <div className='flex justify-between mt-4'>
            <div><span>venue</span></div>
            <div>
                <div className='bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-md'>
                <h5 className='text-white font-semibold'>Total Images</h5>
                 <h3 className='text-white  font-semibold'>2375 Images</h3>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default EventCards