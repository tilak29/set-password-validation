import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ChangePassword from './components/ChangePassword';
import PasswordCom from './components/PasswordCom';

function App() {
  return (
    <div className='container'>
      <section className='ls'>
      <Sidebar/>
      </section>
      <section className='md'>
      <ChangePassword/>
      </section>
      <section className='rs'>
      <PasswordCom/>
      </section>
    </div>
  );
}

export default App;
