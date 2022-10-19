import React from 'react'
import {useSelector} from 'react-redux'
import {BiPlus} from 'react-icons/bi'
const BannerImages = () => {
    let arr=[1,2,3,4,5,6,7,8];
    const{dark}=useSelector((store)=>store.dark);
  return (
    <>
    <div className={`${dark?'bg-black':'bg-white '} rounded-md mt-4 pl-8 pt-8  pb-8 mr-10`}>
        <div className='flex'>
            <div>
                <h2 className={`major-headings ${dark&&'text-white'}`}>Banner Images</h2>
            </div>
            <div className='mt-2 ml-2'>
                <button className='wed-btn border text-sm'>+ upload</button>
            </div>
        </div > 
        <div className='flex mt-4'>
            {
                arr.map((val,i)=>{
                   
                   return(<div key={i} className='rounded-md bg-gray-200 w-[70px] h-[60px] text-gray-200 ml-2   '>{val}</div>) 
                })
            }
        </div>
    </div>
    </>
  )
}

export default BannerImages