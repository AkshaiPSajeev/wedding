import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {setDarkTheme,unsetDarkTheme} from '../redux/ThemeSlice'
import {useSelector} from 'react-redux'
const Toggle = () => {

    const[ischecked,setIsChecked]=useState(false);
    const dispatch=useDispatch();
    const{dark}=useSelector((store)=>store.dark);
  return (
    <>
    <div className={`${dark?' bg-slate-800':'bg-gray-100'}`}>
    <label for="checked-toggle" class="inline-flex relative items-center cursor-pointer">
    <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" onClick={()=>dark?dispatch(unsetDarkTheme()):dispatch(setDarkTheme())} />
     <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
     <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{dark?'Dark':'Light'}</span>
    </label>  
    </div>
    
    </>
  )
}

export default Toggle