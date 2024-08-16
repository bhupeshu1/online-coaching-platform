import React from 'react';
import TimeLine from '../timeline/TimeLine';

const ParentStudent = () => {
  return (
    <div className='flex flex-col w-full h-lvh'>
      {/* header */}
      <div className='flex items-center justify-between mb-10'>
        <img
          className='w-24 h-6'
          src='https://cdn-prod.mytutor.co.uk/shared-assets/mytutor-logo.svg'
          alt='MyTutor Logo'
        />
        <button className='bg-[#EBDED5] rounded-md text-center cursor-pointer p-3 font-medium'>
          Log in
        </button>
      </div>
      {/* md section */}
      <div className='w-full h-lvh bg-green-400 flex flex-col'>
        <h1 className=' text-center text-2xl font-medium leading-7 track-[-0.24438rem]'>
          Are you a parent or a student?
        </h1>
      </div>
    </div>
  );
};

export default ParentStudent;
