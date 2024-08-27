import { useRef, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';

const FindTutor = () => {
  // Explicitly typing the ref as a HTMLButtonElement
  const buttonElement = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonElement.current) {
      buttonElement.current.addEventListener("click", function myFunction(){
        console.log("After five seconds, we appear");
      });
    }
  }, []);

  return (
    <div className='w-full h-lvh p-10'>
      {/* top section */}
      <div className='w-full h-lvh'>
        <h1 className='text-6xl mb-6 font-normal text-[#232323] p-1'>Private tutors that fit your schedule</h1>
        <p className='mb-5 text-base'>
          Find your perfect private tutor and arrange a Free Video Meeting. Then
          book one-to-one Online Lessons to fit your schedule.
        </p>
        <button 
          ref={buttonElement}  
          id='btn' 
          className='bg-[#03CCBA] pt-3 pb-3 pr-6 pl-6 rounded-md h-12 text-center font-medium min-w-16 leading-4 hover:bg-[#006E63] hover:text-white tracking-tight mb-5'
        >
          Book a tutor
        </button>
        <div className='flex items-center justify-start gap-2'>
          <p className='text-lg font-medium font-sans text-[#191919] cursor-pointer'>Excellent</p>
          <span className='text-center text-gray-400'>4.6 out of 5</span>
          <div className='flex'>
            <StarIcon className='text-[#03CCBA]'/>
            <span className='pl-1'>Trustpilot</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTutor;
