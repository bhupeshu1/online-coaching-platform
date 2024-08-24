import React, { useRef, useState } from 'react';
import ButtonComponents from '../../button/ButtonComponents';
import InfoIcon from '@mui/icons-material/Info';
import { useParams } from 'react-router-dom';

const ParentLoginComponents = () => {
  const params = useParams();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showMasterDiv, setShowMasterDiv] = useState(false);
  const [magicButton, setMagicButton] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const emailInputRef = useRef();

  // Update email state on change and clear error if valid
  function handleEmailChange(event) {
    const inputValue = event.target.value;
    setEmail(inputValue);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    if (!inputValue) {
      setError('Email address is required.');
      setIsEmailValid(false);
    } else if (!emailRegex.test(inputValue)) {
      setError('Please enter a valid email address.');
      setIsEmailValid(false);
    } else {
      setError('');
      setIsEmailValid(true);
    }
  }

  // Validate and handle button click
  function handleButtonClick(event) {
    event.preventDefault();

    const emailValue = emailInputRef.current.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    // Validate email
    if (!emailValue) {
      setError('Email address is required.');
      setIsEmailValid(false);
      emailInputRef.current.focus();
    } else if (!emailRegex.test(emailValue)) {
      setError('Please enter a valid email address.');
      setIsEmailValid(false);
      emailInputRef.current.focus();
    } else {
      setError('');
      setIsEmailValid(true);
      setShowMasterDiv(true);
      setMagicButton(false);
      console.log('Proceed with login action');
    }
  }

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
          src={login_image}
          alt='Login Illustration'
        />
        <img
          className='hidden max-md:flex'
          src={login_image_mobile}
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
            onChange={handleEmailChange}
            ref={emailInputRef}
            id='email-input'
            type='email'
            value={email}
            placeholder='Type your email address'
            className={`w-full outline-none rounded font-normal text-sm border p-4 align-middle mt-2 bg-[#fff] ${
              !isEmailValid
                ? 'border-red-500 focus:border-red-300 focus:ring-red-300'
                : 'focus:border-[#03ccba] focus:ring-[#03ccba]'
            }`}
          />
          <div style={{ color: 'red' }}>{error}</div>
        </div>

        {/* Conditional rendering of the master div */}
        {showMasterDiv && (
          <div className='flex flex-col gap-6 mt-4'>
            {/* password section */}
            <div className='flex flex-col'>
              <label>Password</label>
              <div className='relative overflow-hidden'>
                <input
                  className='w-full relative overflow-hidden outline-none rounded font-normal text-sm border p-4 align-middle mt-2 bg-[#fff] pr-2'
                  type={showPassword ? 'text' : 'password'}
                  value={showPassword}
                  onChange={(e) => setShowPassword(e.target.value)}
                />
                <div
                  className='absolute top-5 right-2 cursor-pointer'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span>{showPassword ? 'Hide' : 'Show'}</span>
                </div>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center gap-4 cursor-pointer'>
                <input
                  type='checkbox'
                  className='transition duration-150 ease-in-out w-5 h-5 bg-[#03ccba]'
                />
                <p className='text-[#303336] font-normal'>Remember me</p>
              </div>
              <p className='text-[#006e63] cursor-pointer font-normal hover:text-[#03ccba] hover:border-b-2 border-[#03ccba] hover:text-'>
                Forgotten password?
              </p>
            </div>
            <ButtonComponents
              label={'Log in '}
              // className={`${isEmailValid?'bg-[#03ccba]':'bg-[#ebded5] p-3'}`}
            />
          </div>
        )}

        {/* buttons */}
        <div className='flex flex-col gap-5 w-full mt-7 mb-4'>
          {magicButton && (
            <ButtonComponents
              label={'Log in with password'}
              onClick={handleButtonClick}
              className={`w-full p-4 ${
                isEmailValid ? 'bg-[#03ccba]' : 'bg-[#ebded5]'
              }`}
            />
          )}
          {magicButton && (
            <ButtonComponents
              label={'Log in with magic link'}
              variant='secondary'
              onClick={handleButtonClick}
              className={`w-full p-4 ${
                isEmailValid ? 'bg-[#03ccba]' : 'bg-[#ebded5]'
              }`}
            />
          )}
        </div>

        {/* text */}
        {magicButton && (
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
        )}
      </div>
    </div>
  );
};

export default ParentLoginComponents;
