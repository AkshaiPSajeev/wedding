import React from 'react'
import EventCards from '../EventCards/EventCards'

const Events = () => {
  return (
    <>
        <div className='bg-white  rounded-md mt-4 pl-8 pt-8  pb-8 mr-10'>
            <div className='flex'>
                <div>
                    <h2 className='major-headings'>Events</h2>
                </div>
                <div className='mt-2 ml-2'>
                    <button className='wed-btn border text-sm'>+ Add new Event</button>
                </div>
            </div>
            <div>
                <EventCards/>
                <EventCards/>
                <EventCards/>
            </div>
        </div>
    </>
  )
}

export default Events