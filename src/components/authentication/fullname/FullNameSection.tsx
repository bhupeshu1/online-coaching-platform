import React from 'react'
import ButtonComponents from '../../button/ButtonComponents'

const FullNameSection = () => {
  return (
    <div className='min-h-screen flex box-border bg-[#f7f2ed]'>
       <div className='w-[67%] h-lvh max-lg:w-full overflow-hidden'>
       <div className='flex justify-between max-lg:items-end items-center  m-8'>
          <img
            className='w-24 h-6 cursor-pointer'
            src='https://cdn-prod.mytutor.co.uk/shared-assets/mytutor-logo.svg'
            alt='MyTutor Logo'
          />
          <div>
            <ButtonComponents label={'Log in'} variant='success' />
          </div>
        </div>

       </div>
       <div className='w-[33%] h-lvh max-lg:hidden '></div>
      
    </div>
  )
}

export default FullNameSection
