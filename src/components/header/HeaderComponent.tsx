import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  // let btnName="Log in";
  const navigate=useNavigate();
  // const [btnName,setBtnName]=useState("Log in")
  const navDialogRef = useRef(null);

  function handleMenu() {
    if (navDialogRef.current) {
      navDialogRef.current.classList.toggle('hidden');
      console.log(navDialogRef.current, 'this is menu');
    }
  }
  function handleSignUp() {
    alert('hello');
    window.location.href = 'https://www.mytutor.co.uk/'; // Replace '/signup' with the actual URL you want to redirect to
  }
  const navlinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? '#03CCBA' : 'black',
    };
  };
  return (
    <div className='flex justify-between items-center pl-5 pr-5 w-full h-20 bg-[#F7F2ED]'>
      {/* logo section */}
      <div>
        <img
          className='w-24 h-6'
          src='https://cdn-prod.mytutor.co.uk/shared-assets/mytutor-logo.svg'
          alt='logo'
        />
      </div>
      {/* nav items */}
      <div className='hidden md:flex gap-5'>
        <ul className='flex gap-5'>
          <li>
            <NavLink to='/' style={navlinkStyle}>
              Find a tutor
            </NavLink>
          </li>
          <li>
            <NavLink to='Become a tutor' style={navlinkStyle}>
              Become a tutor
            </NavLink>
          </li>
        </ul>
      </div>
      {/* button section */}
      <div className='hidden md:flex gap-4'>
        <button  
        onClick={()=>{
          navigate('./login')
          }} 
               className='bg-[#EBDED5] rounded-md text-center cursor-pointer pl-6 pr-6 pt-3 pb-3 font-medium'>
          {/* {btnName} */}
          Log in
        </button>
        <button
          onClick={handleSignUp}
          className='rounded-md text-center cursor-pointer pl-6 pr-6 pt-3 pb-3 bg-[#03CCBA] hover:text-white hover:bg-[#006e63] font-medium'
        >
          Sign up
        </button>
      </div>
      {/* hamburger menu icon */}
      <div className='md:hidden'>
        <MenuIcon
          fontSize='large'
          onClick={handleMenu}
          className='cursor-pointer'
        />
      </div>
      {/* mobile nav dialog */}
      <div
        id='nav-dialog'
        ref={navDialogRef}
        className='fixed md:hidden inset-0 p-3 bg-[#F7F2ED] hidden'
      >
        <div id='navbar' className='flex justify-between'>
          <img
            className='w-24 h-6'
            src='https://cdn-prod.mytutor.co.uk/shared-assets/mytutor-logo.svg'
            alt='logo'
          />
          <div className='cursor-pointer md:hidden'>
            <CloseIcon fontSize='large' onClick={handleMenu} />
          </div>
        </div>
        <ul className='mt-5'>
          <div className='flex flex-col items-center'>
            <li className='py-2 mb-4'>
              <a href='#find-a-tutor' className=''>
                Find a tutor
              </a>
            </li>
            <li className='py-2 mb-4'>
              <a href='#become-a-tutor'>Become a tutor</a>
            </li>
          </div>
          <li className='py-2 mb-4'>
            <button 
            onClick={()=>{
              navigate('./login')
              
              }} 
              className='w-full bg-[#EBDED5] rounded-md text-center cursor-pointer pt-3 pb-3 font-medium'>
             {/* {btnName} */}
             Log in
            </button>
          </li>
          <li className='py-2'>
            <button
              onClick={handleSignUp}
              className='w-full rounded-md text-center cursor-pointer pt-3 pb-3 bg-[#03CCBA] hover:text-white hover:bg-[#006e63] font-medium'
            >
              Sign up
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
