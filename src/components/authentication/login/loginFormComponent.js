import React, { useRef, useState } from 'react';
import ButtonComponents from '../../button/ButtonComponents';
import InfoIcon from '@mui/icons-material/Info';
import { useParams } from 'react-router-dom';

const ParentLoginComponents = () => {
  const params = useParams();
  const [error, setError] = useState(false);
  const handleRef = useRef();

  const handleClick = () => {
    const emailRef = handleRef.current.value;
    handleRef.current.focus();
    if (emailRef === '') {
      setError(true);
    } else {
      setError(false);
    }
  };

  const getLoginData = () => {
    let loginData = {};
    switch (params.loginType) {
      case 'student':
        loginData = {
          login_image:
            'https://cdn.mytutor.co.uk/images/login/student-mytutor-286x286.png?1724228056000',
          login_image_mobile:
            'https://cdn.mytutor.co.uk/images/login/book-pen-189x129.png?1724228056000',
          login_title: 'Student Login',
          login_description:
            'Have lessons, message your tutor or watch your lessons back.',
        };
        break;
      case 'parent':
        loginData = {
          login_image:
            'https://cdn.mytutor.co.uk/images/login/parent-mytutor-274x286.png?1724228056000',
          login_image_mobile:
            'https://cdn.mytutor.co.uk/images/login/coffee-creditcard-138x150.png?1724228056000',
          login_title: 'Parent Login',
          login_description: 'Manage payments or lessons for your child.',
        };
        break;
      case 'tutor':
        loginData = {
          login_image:
            'https://cdn.mytutor.co.uk/images/login/tutor-mytutor-330x286.png?1724228870000',
          login_image_mobile:
            'https://cdn.mytutor.co.uk/images/login/laptop-coffee-189x120.png?1724228870000',
          login_title: 'Tutor Login',
          login_description:
            'Give lessons or manage bookings with your customers.',
        };
        break;
      default:
        loginData = {
          login_image:
            'https://cdn.mytutor.co.uk/images/login/tutor-mytutor-330x286.png?1724228870000',
          login_image_mobile:
            'https://cdn.mytutor.co.uk/images/login/laptop-coffee-189x120.png?1724228870000',
          login_title: 'Tutor Login',
          login_description:
            'Give lessons or manage bookings with your customers.',
        };
        break;
    }
    return loginData;
  };

  const { login_image, login_image_mobile, login_title, login_description } =
    getLoginData();

  return (
    <div className='flex items-center w-full p-8 max-w-[1000px] shadow-md max-md:flex-col box-border bg-[#fff]'>
      {/* left section */}
      <div className='flex flex-col justify-between items-center gap-5 text-center bg-[#fff] w-1/2 max-md:w-full max-md:mb-7'>
        <img
          className='w-36 h-36 max-md:hidden'
          src={login_image} // Use the prop for the image
          alt='Login Illustration'
        />
        <img
          className='hidden max-md:flex'
          src={login_image_mobile} // Use the prop for the mobile image
          alt='Mobile Login Illustration'
        />
        <h2 className='max-md:hidden font-bold'>{login_title}</h2>
        <h2 className='hidden max-md:flex font-bold'>{login_title}</h2>
        <p className='pl-10 pr-10 max-md:p-0'>{login_description}</p>
      </div>
      {/* middle section */}
      <div className='h-80 border-l-2 border-gray-500 mr-8 max-md:hidden'></div>

      {/* right section */}
      <div className='flex-1  bg-[#fff] flex flex-col p-5 max-md:p-0 max-md:w-full'>
        <div>
          <label>Email address</label>
          <input
            ref={handleRef}
            id='email-input'
            type='email'
            placeholder='Type your email address'
            className={`w-full rounded font-normal text-sm border p-4 align-middle mt-2 bg-[#fff] ${
              error
                ? 'border-red-500 text-red-500 bg-red-50 focus:bg-red-100'
                : 'border-[#ebded5] hover:border-[#00918a] focus:bg-white'
            } outline-none shadow-none`}
          />
          {error && (
            <p className='text-red-500 text-sm mt-1'>
              Email address is required.
            </p>
          )}
        </div>

        {/* buttons */}
        <div className='flex flex-col gap-5 w-full mt-7 mb-4'>
          <ButtonComponents
            label={'Log in with password'}
            onClick={handleClick}
          />
          <ButtonComponents
            onClick={handleClick}
            label={'Log in with magic link'}
            variant='secondary'
          />
        </div>

        {/* text */}
        <div className='max-md:flex max-md:flex-wrap overflow-hidden'>
          <p className='font-normal flex-shrink-0'>
            <InfoIcon className='text-center' /> Do you have a membership with
            us?
          </p>
          <p className='font-normal flex-shrink'>
            Log in to our{' '}
            <span className='border-b-2 border-black cursor-pointer text-[#006e63] hover:text-[#03ccba]'>
              memberships{' '}
            </span>
            <span className='border-b-2 border-black cursor-pointer text-[#006e63] hover:text-[#03ccba]'>
              service.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentLoginComponents;
