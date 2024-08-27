import React from 'react';
import { useParams } from 'react-router-dom';



const LoginHeaderComponents = ({ back_icon, cross_icon, label }) => {
  const myParam = useParams();
  const getLoginLabel = () => {
    let loginData = {};
    switch (myParam.loginType) {
      case 'student':
        loginData = {
          label: 'Student Log in',
        };
        break;
      case 'parent':
        loginData = {
          label: 'Parent log in',
        };
        break;
      case 'tutor':
        loginData = {
          label: 'Tutor log in',
        };
        break;
      default:
        loginData = {
          label: 'Tutor log in',
        };
        break;
    }
    return loginData;
  };

  const { label: resolvedLabel } = getLoginLabel();

  return (
    <div className='flex items-center justify-between w-full'>
      <div className='cursor-pointer' onClick={back_icon.props.onClick}>
        {back_icon}{' '}
      </div>
      <h2 className='text-[#242424] font-bold text-4xl max-md:text-sm'>
        {resolvedLabel || label}
      </h2>
      <div className='cursor-pointer'>{cross_icon}</div>
    </div>
  );
};

export default LoginHeaderComponents;
