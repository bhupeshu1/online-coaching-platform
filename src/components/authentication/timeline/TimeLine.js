import React, { useState } from 'react';
import WestIcon from '@mui/icons-material/West';
import CloseIcon from '@mui/icons-material/Close';

const TimeLine = (props) => {
  const [width, setWidth] = useState(30);
  const increaseWidth = () => {
    setWidth((prevWidth) => Math.min(prevWidth + 10, 100));
  };

  return (
    <div className='p-5 flex flex-col items-center'>
      <div className='flex items-center gap-[50px]'>
        <WestIcon fontSize='large' className='cursor-pointer' />
        <div className='w-[600px] bg-[#EBEBEB] relative'>
          <div
            id='hello'
            className='w-[30%] h-3 rounded bg-[#03CCBB]'
            style={{ width: `${width}%` }}
          ></div>
        </div>

        <CloseIcon className='cursor-pointer' />
      </div>
      {/* Button to trigger width increase */}
      <button
        onClick={increaseWidth}
        className='mt-3 p-1 bg-blue-500 text-white rounded'
      >
        Increase Width
      </button>
    </div>
  );
};

export default TimeLine;
