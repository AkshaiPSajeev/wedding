import React from 'react'

const Nav = () => {
  return (
    <>
    <div className='flex justify-between bg-gray-100 w-96 mt-4 pl-4 pt-2 pb-2 rounded-md'>
        <div className='flex'>
            <div><span className='text-3xl'>Mehndi</span></div>
            <div className='ml-16'><span className=' text-3xl'>All</span></div>
            <div className='ml-16'><span className='text-3xl'>Haldi</span></div>
            <div className='ml-16'><span className='text-3xl'>Carnival</span></div>
        </div>
        <div className='bg-gray-100'>
            <span>Feed</span>
        </div>
    </div>
    </>
  )
}

export default Nav