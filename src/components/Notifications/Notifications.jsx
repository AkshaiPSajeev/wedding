import React, { useState } from 'react'
import api from '../../api/Notifications.json'
import './Notifications.css'
import {useSelector} from 'react-redux'

const Notifications = () => {

    const[notifications,setNotifications]=useState(api);
    let headingStyle="font-semibold text-2xl"
    const{dark}=useSelector((store)=>store.dark);
  return (
    <>
    <div className={`rounded-md divStyles  mt-5 ${dark?'bg-black':'bg-white'}`}>
        <div>
        <h2 className={`${dark?'text-white font-semibold text-2xl':headingStyle} `}>Notifications</h2>
        <button className='wed-btn border text-sm'>send Notification</button>
        </div>
        {
            notifications.map((notification,i)=>{
                return(
                    <div className='mt-4 border-b-[3px] pb-3'>
                        <div className='flex justify-between pl-2'>
                            <div className='rounded-md bg-gray-200 w-[60px] h-[40px] text-gray-200'>{notification.img}</div>
                            <div className='ml-4'>
                                <h3 className={`font-semibold text-[9pt] ${dark&&'text-white'}`}>{notification.heading}</h3>
                            </div>

                        </div>
                        <div className='mt-1 pl-2'>
                            <p className='text-[9pt] text-gray-300'>{notification.content}</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div><span className='text-[8pt] text-gray-400'>{notification.time}</span></div>
                            <div><span className='text-[8pt] text-gray-400'>{notification.date}</span></div>
                        </div>
                    </div>
                )
            })
        }
        
    </div>
    </>
  )
}

export default Notifications