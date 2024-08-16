import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignupUser from './components/authentication/signup/SignupUser';
import HeaderComponent from './components/header/HeaderComponent';
import BecomeTutor from './pages/become/BecomeTutor';
import FindTutor from './pages/findtutor/FindTutor';
import CustomDropdown from './components/dropdown/CustomDropdown';
import GreatChoice from './components/authentication/Choice/GreatChoice';
import SelectSubject from './components/authentication/subject/SelectSubject';
import ParentStudent from './components/authentication/parent/ParentStudent';
import TimeLine from './components/authentication/timeline/TimeLine';

function App() {
  return (
    <div className='App'>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<FindTutor />}>
          Find a tutor
        </Route>
        <Route path='Become a tutor' element={<BecomeTutor />}>
          Become a tutor
        </Route>
        <Route path="customDropdown" element={<CustomDropdown/>}/>
        <Route path="Great-Choice" element={<GreatChoice/>}></Route>
        <Route path="select-sub" element={<SelectSubject/>}></Route>
        <Route path="parent-student" element={<ParentStudent/>} ></Route>
        <Route path='range' element={<TimeLine/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
