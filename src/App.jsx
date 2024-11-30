import React from 'react';

import {Routes,Route} from 'react-router-dom'

import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SettingPage from './pages/SettingPage';
import Profile from './pages/Profile'
const App = () => {
  return (
    <div>
      <h1>hhhhhh</h1>

      <Routes>
        <Route  path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/setting' element={<SettingPage />} />
        <Route path='/profile' element={<Profile />} />

      </Routes>
      {/* <button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button> */}
    </div>
  );
};

export default App;
