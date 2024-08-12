import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignupUser from './components/authentication/signup/SignupUser';
import HeaderComponent from './components/header/HeaderComponent';
import BecomeTutor from './pages/become/BecomeTutor';
import FindTutor from './pages/findtutor/FindTutor';

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
      </Routes>
    </div>
  );
}

export default App;
