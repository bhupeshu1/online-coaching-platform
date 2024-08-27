import React from 'react';
import LoginHeaderComponents from '../LoginHeaderComponents';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import LoginForm from './loginFormComponent';
import ButtonComponents from '../../button/ButtonComponents';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const ParentLoginPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
     navigate('/login/') // navigate url through
  };
  return (
    <div className='min-h-screen flex flex-col justify-between p-10 box-border bg-[#f7f2ed] max-md:bg-[#fff] max-md:p-4'>
      {/* header */}
      <div className='ml-28 mr-28 mb-12 max-md:ml-0 max-md:mr-0'>
        <LoginHeaderComponents
          label={'Parent log in'}
          back_icon={
            <ArrowBackIcon fontSize='large' onClick={handleBackClick} />
          }
          cross_icon={<CloseIcon fontSize='large' />}
        />
      </div>
      {/* middle */}
      <div className='flex justify-center mb-14 flex-grow'>
        <LoginForm />
      </div>
      {/* footer */}
      <div className='w-full flex flex-col md:flex-row justify-between items-center pl-8 pr-8 max-md:pl-4 max-md:pr-4 md:pl-32 md:pr-32 max-md:text-center'>
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
        <div className='w-full md:w-auto'>
          <ButtonComponents label={'Sign up'} onClick={undefined} />
        </div>
      </div>
    </div>
  );
};

export default ParentLoginPage;
