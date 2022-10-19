import React from 'react'
import {TiTick} from 'react-icons/ti'
const Guest = () => {
  return (
    <>
    <div className='bg-white  rounded-md pt-4 pl-16 pr-10 mt-10 '>
    <div>
            <h2 className='major-headings'>Gallery</h2>
        </div>
        
<div class="overflow-x-auto relative mt-4">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pt-4 pb-4">
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
                <td class="py-4 px-6 bg-green text-2xl">
                    <div className='bg-green'>
                    <TiTick/>
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