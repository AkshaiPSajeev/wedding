import React from 'react'
import {TiTick} from 'react-icons/ti'
import { IoMdClose } from "react-icons/io"; 
import {useSelector} from 'react-redux'
const   Guest = () => {
    const{dark}=useSelector((store)=>store.dark);
  return (
    <>
    <div className={`rounded-md pt-4 pl-16 pr-10 mt-10 pb-20 ${dark?'bg-black':'bg-white'}`}>
    <div>
            <h2 className={`major-headings ${dark&&'text-white'}`}>Guest</h2>
        </div>
        
<div class="overflow-x-auto relative mt-4">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-md">
        <thead class="text-[11pt] text-gray-700  bg-gray-100  dark:bg-gray-700 dark:text-gray-400 pt-4 pb-4">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Phone number
                </th>
                <th scope="col" class="py-3 px-6">
                    ID proof
                </th>
                <th scope="col" class="py-3 px-6">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                
                <td class="py-4 px-6">
                    Guest Name
                </td>
                <td class="py-4 px-6">
                    Phone number
                </td>
                <td class="py-4 px-6">
                    
                </td>
                <td class="py-4 px-6 bg-green text-2xl ">
                    <div className='flex'>
                    <TiTick className='bg-green-600 text-white rounded-md'/>
                    <IoMdClose className='bg-red-600 text-white rounded-md text-[.99em] ml-1'/>
                    </div>
               
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                
                <td class="py-4 px-6">
                    Guest Name
                </td>
                <td class="py-4 px-6">
                    Phone number
                </td>
                <td class="py-4 px-6">
                    
                </td>
                <td class="py-4 px-6">
                   
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                
                <td class="py-4 px-6">
                    Guest Name
                </td>
                <td class="py-4 px-6">
                    Phone number
                </td>
                <td class="py-4 px-6">
                    
                </td>
                <td class="py-4 px-6">
                   
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                
                <td class="py-4 px-6">
                    Guest Name
                </td>
                <td class="py-4 px-6 ">
                    Phone number
                </td>
                <td class="py-4 px-6">
                    
                </td>
                <td class="py-4 px-6">
                   
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                
                <td class="py-4 px-6">
                    Guest Name
                </td>
                <td class="py-4 px-6">
                    Phone number
                </td>
                <td class="py-4 px-6">
                    
                </td>
                <td class="py-4 px-6">
                   
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                
                <td class="py-4 px-6">
                    Guest Name
                </td>
                <td class="py-4 px-6">
                    Phone number
                </td>
                <td class="py-4 px-6">
                    
                </td>
                <td class="py-4 px-6">
                
                </td>
            </tr>
   
        </tbody>
    </table>
</div>

    </div>
    </>
  )
}

export default Guest