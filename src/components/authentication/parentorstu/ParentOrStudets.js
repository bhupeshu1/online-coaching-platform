import React from 'react';
import ButtonComponents from '../../button/ButtonComponents';
import LoginHeaderComponents from '../LoginHeaderComponents';
import TimeLine from '../timeline/TimeLine';

const ParentOrStudets = () => {
  return (
    <div className='min-h-screen flex box-border bg-[#f7f2ed]'>
      <div className='w-[67%] h-lvh max-lg:w-full overflow-hidden'>
        {/* login and logo */}
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
        <div className='m-8'>
          <TimeLine />
        </div>
        <div className='text-center m-8'>
          <h1 className='font-bold text-5xl overflow-hidden max-lg:text-4xl max-lg:font-semibold p-2'>
            Are you a parent or a student?
          </h1>
        </div>
        {/* box */}
        <div className='flex flex-col flex-grow gap-5 items-center justify-center overflow-hidden'>
          <div className='min-w-80 max-w-[100%] h-16 bg-[#fff] flex  items-center justify-center rounded-md border-2 hover:border-[#12B4A6] cursor-pointer'>
            <p className='font-medium text-sm text-[#232323]'>
              Parent or guardian
            </p>
          </div>
          <div className='min-w-80 max-w-[100%] h-16 bg-[#fff] flex gap-5 items-center justify-center rounded-md border-2 hover:border-[#12B4A6] cursor-pointer'>
            <p className='font-medium text-sm text-[#232323]'>Student</p>
          </div>
          <div className='min-w-80 max-w-[100%] h-16 bg-[#fff] flex gap-5 items-center justify-center rounded-md border-2 hover:border-[#12B4A6] cursor-pointer'>
            <p className='font-medium text-sm text-[#232323]'>Student (18+)</p>
          </div>
        </div>
        <div className='flex items-center justify-center m-8'>
          <p className='font-normal p-4 max-lg:p-2'>Looking to become a tutor?{' '}<span className='font-medium text-[#006E63] cursor-pointer hover:text-[#03CCBB]'>Apply here</span></p> 
        </div>
      </div>
      {/* right */}
      <div className='w-[33%] h-lvh max-lg:hidden '>
      <img
          className='object-cover w-full h-full'
          src='https://cdn-prod.mytutor.co.uk/signup-assets/type-step.jpg'
          alt='Right Section Image'
        />
      </div>
    </div>
  );
};

export default ParentOrStudets;
