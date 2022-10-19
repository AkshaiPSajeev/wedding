import React from 'react'
import {useSelector} from 'react-redux'
const Dummy = () => {
    const{dark}=useSelector((store)=>store.dark);
  return (
    <>
        <div className={`${dark?'bg-slate-800':'bg-gray-100'}`}>
                sdfsff
        </div>
    </>
  )
}

export default Dummy