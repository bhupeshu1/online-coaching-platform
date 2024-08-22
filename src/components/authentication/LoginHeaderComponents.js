import React from 'react';

const LoginHeaderComponents = ({ label, cross_icon, back_icon}) => {
  return (
    <div className='flex items-center justify-between w-full'>
      <div className='cursor-pointer' onClick={back_icon.props.onClick}>{back_icon} </div>
      <h2 className='text-[#242424] font-bold text-4xl max-md:text-sm'>
        {label}
      </h2>
      <div className='cursor-pointer'>{cross_icon}</div>
    </div>
  );
};

export default LoginHeaderComponents;
