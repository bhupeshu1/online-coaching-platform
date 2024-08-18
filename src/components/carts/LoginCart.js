import React from 'react';
import ButtonComponents from '../button/ButtonComponents';

const LoginCart = ({
  cart_image,
  cart_heading,
  cart_description,
  button_text,
}) => {
  const handleClick = () => {
    console.log('button click');
    alert("check btn")
  };
  return (
    <div className='w-[340px] h-auto flex flex-col gap-3 items-center text-center bg-[#fff] shadow-md p-10 cursor-pointer'>
      <img className='w-32 h-36 mb-3' src={cart_image} alt={cart_heading} />
      <h2 className='text-lg font-bold text-[#242424]'>{cart_heading}</h2>
      <p className='text-[#666] font-normal text-base'>{cart_description}</p>
      <ButtonComponents onClick={handleClick} label={button_text} />
    </div>
  );
};

export default LoginCart;
