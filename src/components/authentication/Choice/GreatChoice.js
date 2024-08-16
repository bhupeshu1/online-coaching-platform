import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TimeLine from '../timeline/TimeLine';
const GreatChoice = () => {
  return (
    <div className='flex'>
      {/* left section */}
      <div className='w-full lg:w-[70%] h-lvh p-5 bg-[#F7F2ED!important]'>
        {/* header section */}
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
      <TimeLine/>

        {/* text wrapper */}
        <div>
          <p className='text-center font-medium text-[#232323] text-4xl leading-tight'>
            Great choice! Which level are you looking for?
          </p>
          <p className='text-center text-[#5B5B5B] mt-6 font-normal text-2xl leading-6 pb-[2px]'>
            This helps us to find you tutors with the right experience.
          </p>
        </div>
        {/* level section */}
        <div className='w-full flex gap-4 flex-wrap items-center justify-center mt-8'>
          {[
            '11 Plus',
            '13 Plus',
            'A Level',
            'GCSE',
            'IB',
            'KS3',
            'National 4 and 5',
            'Scottish Highers',
            'University',
          ].map((level) => (
            <div
              key={level}
              className='min-w-[360px] h-[62px] transition-[0.4s] bg-[#FFFFFF] rounded flex items-center justify-center border-none hover:border-solid border-2 border-sky-500 cursor-pointer'
            >
              <p className='font-semibold leading-4 text-center text-[#232323]'>
                {level}
              </p>
            </div>
          ))}
        </div>
        {/* skip button */}
        <div className='flex items-center justify-center gap-1 w-full mt-8 cursor-pointer'>
          <p className='text-[16px font-normal'>Skip</p>
          <ArrowRightAltIcon fontSize='large' />
        </div>
      </div>
      {/* right section */}
      <div className='hidden lg:flex w-full lg:w-[30%] h-lvh'>
        <img
          className='object-cover w-full h-full'
          src='https://cdn-prod.mytutor.co.uk/signup-assets/level-step.jpg'
          alt='Right Section Image'
        />
      </div>
    </div>
  );
};

export default GreatChoice;
