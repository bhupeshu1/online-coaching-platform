import React from 'react';
import ButtonComponents from '../button/ButtonComponents';

interface LoginCartProps {
  cart_image: string;
  cart_heading: string;
  cart_description: string;
  button_text: string;
  onClick: (userType: string) => void;
  userType: string;
}

const LoginCart: React.FC<LoginCartProps> = ({
  cart_image,
  cart_heading,
  cart_description,
  button_text,
  onClick,
  userType,
}) => {
  return (
    <div className='w-[340px] h-auto flex flex-col gap-3 items-center text-center bg-[#fff] p-10 m-2'>
      <img className='w-32 h-36 mb-3' src={cart_image} alt={cart_heading} />
      <h2 className='text-lg font-bold text-[#242424]'>{cart_heading}</h2>
      <p className='text-[#666] font-normal text-base'>{cart_description}</p>
      <ButtonComponents onClick={() => onClick(userType)} label={button_text} />
    </div>
  );
};

export default LoginCart;
