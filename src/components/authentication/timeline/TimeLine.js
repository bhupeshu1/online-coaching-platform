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
      <div className='flex items-center gap-4 flex-grow w-full max-w-[90%]'>
        <WestIcon fontSize='large' className='cursor-pointer' />

        <div className='flex-grow bg-[#EBEBEB] relative h-3 rounded overflow-hidden'>
          <div
            id='hello'
            className='h-full rounded bg-[#03CCBB]'
            style={{ width: `${width}%` }}
          ></div>
        </div>

        <CloseIcon className='cursor-pointer' />
      </div>

      {/* <button
        onClick={increaseWidth}
        className='mt-3 p-2 bg-blue-500 text-white rounded'
      >
        Increase Width
      </button> */}
    </div>
  );
};

export default TimeLine;
