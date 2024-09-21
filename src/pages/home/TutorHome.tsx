import React from 'react';
import ButtonComponents from '../../components/button/ButtonComponents';
import TextComponents from '../../components/TextComponents';

const TutorHome = () => {
  const subData = [
    {
      id: 2,
      sub: 'Math',
    },
    {
      id: 3,
      sub: 'English',
    },
    {
      id: 4,
      sub: 'Chemistry',
    },
    {
      id: 5,
      sub: 'Physics',
    },
    {
      id: 45,
      sub: 'Biology',
    },
    {
      id: 23,
      sub: 'Science',
    },
    {
      id: 90,
      sub: 'Spanish',
    },
    {
      id: 80,
      sub: 'German',
    },
    {
      id: 23,
      sub: 'History',
    },
    {
      id: 46,
      sub: 'Music',
    },
    {
      id: 67,
      sub: 'Psychology',
    },
    {
      id: 89,
      sub: 'Politics',
    },
    {
      id: 10,
      sub: 'All Subjects',
    },
  ];
  return (
    <div className='bg-[#F7F2ED] flex flex-col box-border overflow-hidden'>
      <div className='w-full h-lvh flex justify-center items-center leading-[1.5] max-lg:flex-co'>
        {/* homepage first section */}
        <div className='w-full max-w-7xl  mx-auto flex gap-12 max-md:flex-col items-center justify-center relative '>
          {/* Text Section */}
          <div className='w-1/2 max-md:w-full max-md:p-4'>
            <h1 className='text-[#232323] font-bold text-5xl font-sans text-start px-14 max-md:text-center max-md:text-4xl max-sm:text-3xl max-sm:px-4 overflow-hidden'>
              Online tutoring that releases potential
            </h1>
            <p className='py-12 px-14 text-[#232323] font-normal text-start max-md:text-center max-sm:text-base max-sm:px-4'>
              We can't stop you worrying about your child. But our expert tutors
              can help their grades and confidence soar - and help you worry a
              little less.
            </p>
            <div className='flex justify-center gap-4 px-14 max-sm:px-4'>
              <ButtonComponents label='Get Started' />
              <ButtonComponents label='Get Started' />
            </div>
          </div>

          {/* Images Section */}
          <div className='w-1/2 flex justify-center relative h-full py-24 max-md:w-full max-md:py-12'>
            {/* First Image - Top Left */}
            <img
              className='absolute top-8 left-28 w-[233px] h-[204px] object-contain max-md:hidden'
              src='https://www.mytutor.co.uk/landing/brand-shape1.svg'
              alt='Shape 1'
            />

            {/* Second Image - Center */}
            <img
              className='w-[300px] h-auto relative z-10 object-contain max-sm:w-[200px]'
              src='https://www.mytutor.co.uk/_next/image?url=%2Flanding%2Fbrand-image-for-hero.png&w=1200&q=75'
              alt='Hero Image'
            />

            {/* Third Image - Bottom Right */}
            <img
              className='absolute bottom-16 right-28 w-[233px] h-[203px]  object-contain max-md:hidden'
              src='https://www.mytutor.co.uk/landing/brand-shape2.svg'
              alt='Shape 2'
            />
          </div>
        </div>
      </div>
      <div className='bg-[#FFFFFF] grid gap-5 py-4 w-full h-auto xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 md:justify-items-center lg:justify-items-center place-items-center mb-5'>
        <div className='text-center'>
          <h1 className='cursor-pointer text-[#232323] font-medium text-base whitespace-nowrap leading-relaxed'>
            Excellent
          </h1>
        </div>

        <div className='hidden sm:block'>
          <h1 className='cursor-pointer text-[#232323] font-medium text-base whitespace-nowrap leading-relaxed'>
            426,535+ 5-star reviews
          </h1>
        </div>

        <div className='text-center'>
          <h1 className='cursor-pointer text-[#232323] font-medium text-base whitespace-nowrap leading-relaxed'>
            1500 schools trust us
          </h1>
        </div>

        <div className='hidden sm:block'>
          <h1 className='cursor-pointer text-[#232323] font-medium text-base whitespace-nowrap leading-relaxed'>
            30+ subjects available
          </h1>
        </div>

        <div className='text-center'>
          <h1 className='cursor-pointer text-[#232323] font-medium text-base whitespace-nowrap leading-relaxed'>
            255,203+ students
          </h1>
        </div>
      </div>
      <div className='mb-5'>
        <TextComponents label='Pick a subject to get started' size='large' />
        <div id='index' className='flex flex-wrap gap-4 items-center justify-center px-32'>
          {subData.map((data) => (
            <div
              key={data.id}
              className=' font-medium text-xl bg-[#ffffff] text-[#232323] p-3 text-center hover:bg-[#12B4A6] rounded-md'
            >
              {data.sub}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorHome;
