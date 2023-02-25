import React from 'react'
import { UilCloudSunHail } from '@iconscout/react-unicons'
function Forecast({title}) {
  return (
    <>
      <div className='my-10'>
      <div className='items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'> {title}</p>
      </div>
      <hr className='my-2' />
      <div className='flex flex-row items-center justify-between text-white'>
        

        <div className='flex flex-col items-center justify-center'>
          <UilCloudSunHail size={30} />
          <p className='font-light text-sm'>
            04:30 PM
          </p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <UilCloudSunHail size={30} />
          <p className='font-light text-sm'>
            04:30 PM
          </p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <UilCloudSunHail size={30} />
          <p className='font-light text-sm'>
            04:30 PM
          </p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <UilCloudSunHail size={30} />
          <p className='font-light text-sm'>
            04:30 PM
          </p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <UilCloudSunHail size={30} />
          <p className='font-light text-sm'>
            04:30 PM
          </p>
        </div>



        </div>
      </div>
    </>
  )
}

export default Forecast 