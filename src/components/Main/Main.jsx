import React from 'react'
import BannerImages from '../BannerImages/BannerImages'
import Details from '../Details/Details'
import Events from '../Events/Events'
import GallerySummary from '../GallerySummary/GallerySummary'
import Notifications from '../Notifications/Notifications'

const Main = () => {
  return (
    <>
    <div className='flex bg-gray-100 pl-8 pr-10 pt-11'>
        <div className='flex flex-col md:w-[80%]'> 
        
        <Details/>
        <BannerImages/>
        <Events/>
        
        
        </div>
        <div className='md:w-[35%]'>
            <Notifications/>
            <GallerySummary/>
           
        </div>
    
    
    </div>
    </>
  )
}

export default Main