import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import LoginCart from '../carts/LoginCart';
import { cartData } from '../../utils/mockData';
import ButtonComponents from '../button/ButtonComponents';

const TutorLogin = () => {
  return (
    <div className='w-full h-lvh bg-[#f7f2ed]'>
      {/* header section */}
      <div className='flex items-center  flex-wrap justify-end  gap-[400px] pl-32 pr-32 mb-12 mt-10'>
        <p className='font-bold text-[#242424] text-4xl'>Log in</p>
        <CloseIcon className='cursor-pointer' fontSize='large' />
      </div>
      {/* login cart container */}
      <div className='w-full h-auto gap-5 pl-32 pr-32 flex justify-between mb-16'>
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
      {/* footer */}
      <div className='w-full flex justify-between items-center pl-32 pr-32'>
        <div className='flex gap-24'>
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
        <div>
          <ButtonComponents label={'Sign up'} />
        </div>
      </div>
    </div>
  );
};

export default TutorLogin;
