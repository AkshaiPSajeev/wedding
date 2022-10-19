import React from 'react'

const GallerySummary = () => {
  return (
    <div className='rounded-md bg-white mt-5 pl-8 pt-8 pr-4 pb-8'>
        <div>
            <h2 className='major-headings'>Gallery</h2>
        </div>
        <div className='flex mt-4'>
            <div className='border div-box rounded-md pr-8'>
                <h5 className='text-inside'>Requests</h5>
                <h3 className='card-headings'>2375</h3>
            </div>
            <div className=' border div-box pr-8 ml-2 rounded-md'>
                <h5 className='text-inside'>Rejected</h5>
                <h3 className='card-headings'>2375</h3>
            </div>
        </div>
        <div className='div-box border rounded-md mt-4'>
        <h5 className='text-inside'>Total Images</h5>
        <h3 className='card-headings'>2375 Images</h3>
        </div>
    </div>
  )
}

export default GallerySummary