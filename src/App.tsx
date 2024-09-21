import { Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import BecomeTutor from './pages/become/BecomeTutor';
import GreatChoice from './components/authentication/Choice/GreatChoice';
import SelectSubject from './components/authentication/subject/SelectSubject';
import TimeLine from './components/authentication/timeline/TimeLine';
import LoginLanding from './components/login/LoginLanding';
import LoginCart from './components/carts/LoginCart';
import FindTutor from './pages/findtutor/FindTutor';
import LoginHeaderComponents from './components/authentication/LoginHeaderComponents';
import ParentLoginComponents from './components/authentication/login/loginFormComponent';
import ParentLoginPage from './components/authentication/login/loginPage';
import ParentOrStudets from './components/authentication/parentorstu/ParentOrStudets';
import FullNameSection from './components/authentication/fullname/FullNameSection';
import TutorHome from './pages/home/TutorHome';
import DropdownMenu from './components/menu/DropdownMenu';
import React from 'react';
import PasswordInput from './components/authentication/PasswordInput';
import TutorCart from './components/carts/TutorCart';

function App() {
  return (
    <div className='App'>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<TutorHome />}>
          Find a tutor
        </Route>
        <Route path='Become a tutor' element={<BecomeTutor />}>
          Become a tutor
        </Route>
        <Route path="dropdown" element={<DropdownMenu/>}/>
        <Route path='find-tutor' element={<FindTutor/>}></Route>
        <Route path="Great-Choice" element={<GreatChoice/>}></Route>
        <Route path="select-sub" element={<SelectSubject/>}></Route>
        <Route path="parent-login" element={<ParentLoginComponents/>}></Route>
        <Route path='range' element={<TimeLine/>}></Route>
        <Route path="findtutor-cart" element={<LoginCart/>}></Route>
        <Route path=":loginType?/login" element={<LoginLanding />}></Route>
        <Route path="back-close-components" element={<LoginHeaderComponents/>}></Route>
        <Route path='parent-login-page' element={<ParentLoginPage/>}></Route>
        <Route path='parent-or-stu' element={<ParentOrStudets/>}></Route>
        <Route path="full-name" element={<FullNameSection/>}></Route>
        <Route path="homepage" element={<TutorHome/>}></Route>
        <Route path="password" element={<PasswordInput/>}></Route>
        <Route path="tutorcart" element={<TutorCart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
