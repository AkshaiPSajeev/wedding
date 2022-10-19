import React from 'react'
import EventCards from '../EventCards/EventCards'
import {useSelector} from 'react-redux'
const Events = () => {
    const{dark}=useSelector((store)=>store.dark);
  return (
    <>
        <div className={`rounded-md mt-4 pl-8 pt-8  pb-8 mr-10 ${dark?'bg-black':'bg-white'}`}>
            <div className='flex'>
                <div>
                    <h2 className={`${dark?'text-white text-[28px] font-semibold ':'major-headings'}`}>Events</h2>
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