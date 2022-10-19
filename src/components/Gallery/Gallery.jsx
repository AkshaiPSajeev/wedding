import React from 'react'
import Nav from '../Nav/Nav'

const Gallery = () => {
    const arr=[1,2,3,4,5,6,7,8,9,1,1,1]
  return (
    <>
    <div className='bg-white  rounded-md pt-4 pl-16 pr-10 '>
        <h2 className='major-headings'>Gallery</h2>
        {/* <Nav/> */}
        <div className='flex  bg-gray-100  mt-4 pl-8 pt-4 pb-4 rounded-md justify-between'>
            <div className='flex '>
            <div><span className='text-xl'>Mehndi</span></div>
            <div className='ml-16'><span className=' text-xl'>All</span></div>
            <div className='ml-16'><span className='text-xl'>Haldi</span></div>
            <div className='ml-16'><span className='text-xl'>Carnival</span></div>
            </div>
        
            <div className='mr-7 text-red-400 text-xl font-semibold'>Feed</div>
        
        </div>
        <div className='flex justify-end mt-6 mb-6'>
       
            <button className='wed-btn border text-[8pt]'>+ upload</button>
           
            
        </div>
        <hr />
        <div className='flex flex-wrap p-2'>
        {
            arr.map((i,key)=>{
                return (
                <div className='bg-gray-100 w-36 h-36 ml-4 mt-4 rounded-md text-gray-100' key={key}>
                    1
                </div>
                )
            })
           
        }
        </div>
    </div>
    </>
  )
}

export default Gallery