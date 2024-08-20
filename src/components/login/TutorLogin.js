import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import LoginCart from '../carts/LoginCart';
import { cartData, smallScreenCartData } from '../../utils/mockData';
import ButtonComponents from '../button/ButtonComponents';

const TutorLogin = () => {
  return (
    <div className='w-full h-lvh bg-[#f7f2ed]'>
      {/* header section */}
      <div className='flex items-center justify-between pl-8 pr-8 md:pl-32 md:pr-32 mb-12 mt-10 max-md:space-x-4'>
        <div className='min-w-0'>
          <p className='font-bold text-[#242424] text-[1.75rem] md:text-[2.5rem] truncate'>
            Log in
          </p>
        </div>
        <CloseIcon className='cursor-pointer text-[2rem]' fontSize='large' />
      </div>

      {/* login cart container */}
      <div className='w-full h-auto gap-5 pl-8 pr-8 flex flex-col md:pl-32 md:pr-32 md:flex-row max-md:hidden justify-between mb-16 '>
        {cartData.map((item) => (
          <LoginCart
            key={item.id}
            cart_image={item.cart_image}
            cart_heading={item.cart_heading}
            cart_description={item.cart_description}
            button_text={item.button_text}
          />
        ))}
      </div>
      <div className='md:hidden h-auto flex flex-col items-center truncate ml-2 mr-2 mb-3'>
        {smallScreenCartData.map((item) => (
          <LoginCart
            key={item.id}
            cart_image={item.cart_small_screen_image}
            button_text={item.btn_text}
          />
        ))}
      </div>

      {/* footer */}
      <div className='w-full flex flex-col md:flex-row justify-between items-center max-md:flex-col pl-8 pr-8 md:pl-32 md:pr-32 max-md:text-center'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-24 mb-4 md:mb-0'>
          <p>
            Need help? Call us on{' '}
            <span className='text-[#006e63] cursor-pointer font-semibold hover:text-[#03ccba]'>
              +44 (0) 203 773 6020
            </span>{' '}
            or{' '}
            <span className='text-[#006e63] cursor-pointer font-semibold hover:text-[#03ccba]'>
              email us
            </span>
          </p>
          <p>
            Help! I’m an{' '}
            <span className='text-[#006e63] cursor-pointer font-semibold hover:text-[#03ccba]'>
              adult learner
            </span>
          </p>
        </div>
        <div className='max-md:w-full mb-2'>
          <ButtonComponents label={'Sign up'} />
        </div>
      </div>
    </div>
  );
};

export default TutorLogin;
