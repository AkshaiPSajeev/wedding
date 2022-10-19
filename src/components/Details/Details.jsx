import React from 'react'

const Details = () => {
    let headingStyle="font-semibold text-2xl"
  return (
    <>
    <div className='bg-white rounded md mt-5 mr-10 pl-8 pt-8 pr-4 pb-8 '>
        <h2 className={`${headingStyle} `}>Details</h2>
        <div className='mt-4'>
            <div className='flex justify-between'>
                <div className='flex border rounded-md pt-2 pb-2 pl-4 pr-4'>
                    <div className=' '>
                        <h4 className='text-inside'>Hashtag</h4>
                        <p>Enter your hashtag here</p>
                    </div>
                    <div className='ml-4'>
                        <div className='bg-gray-50 rounded-3xl pt-3 pb-3 ml-6'>
                            upload logo
                        </div>
                    </div>
                </div>
                <div className='border rounded-md pl-2 pb-2 pt-2 pr-10'>
                    <h4 className='text-inside'>Users</h4>
                    <p className='card-headings'>235 Users</p>
                </div>
                <div className='border rounded-md pl-2 pb-2 pt-2'>
                    <h4 className='text-inside'>Select Color</h4>
                    <span>Primary</span>
                    <span>Secondary</span>
                </div>
            </div>
            <div className='flex mt-4 justify-between '>
                <div className='rounded-md border div-box pr-12'>
                    <h4 className='text-inside'>Bride's Name</h4>
                    <h3 className='card-headings'>Enter your hashtag here</h3>
                </div>
                <div className='rounded-md border div-box  pr-12'>
                    <h4 className='text-inside'>Groom's Name</h4>
                    <h3 className='card-headings'>Enter your hashtag here</h3>
                </div>
                <div className='rounded-md border div-box pr-12'>
                    <h4 className='text-inside'>Wedding Date</h4>
                    <h3 className='card-headings'>12/10/2021</h3>

                </div>

            </div>
            <div className='flex mt-4 justify-between'>
                <div className='rounded-md border div-box'>
                    <h4 className='text-inside'>Wedding Venue</h4>
                    <h3 className='card-headings'>Enter your Venue's address here for the wedding</h3>
                </div>
                <div className='rounded-md border div-box text-inside'>
                    upload wedding invite
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Details