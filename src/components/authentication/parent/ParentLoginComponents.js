import React, { useRef, useState } from 'react';
import ButtonComponents from '../../../components/button/ButtonComponents';
import InfoIcon from '@mui/icons-material/Info';

const ParentLoginComponents = ({login_image,login_title,login_description}) => {
  const [error,setError]=useState(false);
  const handleRef=useRef();
const  handleClick=()=>{
  const emailRef=handleRef.current.value;
  handleRef.current.focus();
  if(emailRef===''){
    setError(true)
  }
  else{
    setError(false)
    
  }

}
  return (
    <div className='flex items-center w-auto p-8 max-w-[1100px] shadow-md max-md:flex-col box-border'>
      {/* left section */}
      <div className='flex flex-col justify-between items-center gap-5 text-center bg-[#fff] w-1/2 max-md:w-full max-md:mb-7'>
        <img
          className='w-36 h-36 max-md:hidden'
          src='https://cdn.mytutor.co.uk/images/login/parent-mytutor-274x286.png?1723648538000'
        ></img>
        <img className='hidden max-md:flex' src='https://cdn.mytutor.co.uk/images/login/coffee-creditcard-138x150.png?1723648538000'></img>
        <h2>I am a Parent</h2>
        <p className='pl-10 pr-10 max-md:p-0'>
          Manage payments or lessons for your child
        </p>
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
              error ? 'border-red-500 bg-red-50 focus:bg-red-100' : 'border-[#ebded5] hover:border-[#00918a] focus:bg-white'
            } outline-none shadow-none`}
          />
            {error && <p className='text-red-500 text-sm mt-1'>Email address is required.</p>}
        </div>
        {/* buttons */}
        <div className='flex flex-col gap-5 w-full mt-7 mb-4'>
          <ButtonComponents label={'Log in with password'} onClick={handleClick} />
          <ButtonComponents
            label={'Log in with magic link'}
            variant='secondary'
          />
        </div>
        {/* text */}
        <div>
          <div></div>
          <p className='font-normal'><InfoIcon className='text-center'/> Do you have a membership with us?</p>
          <p className='font-normal'>
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
