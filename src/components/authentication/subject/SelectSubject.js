import React from 'react';
import CalculateIcon from '@mui/icons-material/Calculate';
import BiotechIcon from '@mui/icons-material/Biotech';
import ScienceIcon from '@mui/icons-material/Science';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Array of subjects with corresponding icons
const subjects = [
  { name: 'Maths', Icon: CalculateIcon },
  { name: 'Biology', Icon: BiotechIcon },
  { name: 'Chemistry', Icon: ScienceIcon },
  { name: 'English', Icon: AutoStoriesIcon },
  { name: 'Physics', Icon: AirplanemodeActiveIcon },
];

const SelectSubject = () => {
  return (
    <div className='w-full h-full flex relative overflow-x-hidden'>
      {/* right content div */}
      <div className='w-[66.7%] h-lvh p-4 bg-[#F7F7ED]'>
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
        <h1 className="text-center text-3xl font-medium text-[#232323] font-[FoundersGrotesk', 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif]">
          Which subject would you like help with?
        </h1>
        <p className='mt-6 text-center'>
          We'll find you an expert tutor from our network – which covers over
          30+ subjects
        </p>

        {/* Subjects */}
        <div className='mt-6 flex items-center justify-center w-full cursor-pointer gap-5 mb-6'>
          {subjects.map(({ name, Icon }) => (
            <div
              key={name}
              className='w-28 h-24 bg-[#ffffff] flex flex-col items-center 
              justify-center rounded border border-transparent hover:border-2 hover:border-cyan-500 transition ease-in-out delay-150 bg-[#ffffff] hover:bg-[#f3e9e9] duration-300'
            >
              <Icon fontSize='large' />
              <p className='font-medium'>{name}</p>
            </div>
          ))}
        </div>

        {/* dropdown */}
        <div className='w-full flex items-center justify-center relative'>
          <KeyboardArrowDownIcon />
        </div>
      </div>

      {/* left image */}
      <div className='w-[33.3%] h-lvh bg-[url(https://cdn-prod.mytutor.co.uk/signup-assets/subject-step.jpg)] bg-cover bg-center bg-no-repeat'></div>
    </div>
  );
};

export default SelectSubject;
