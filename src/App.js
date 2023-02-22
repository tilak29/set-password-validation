import React,{useEffect,useState} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ChangePassword from './components/ChangePassword';
import PasswordCom from './components/PasswordCom';


function App() {
  const [backendData, setBackendData] = useState([{}])

    useEffect( () => {
    fetch("/api").then(
    response => response. json()
    ).then(
    data => {
    setBackendData (data)
    }
    )
  }, [])

  return (
    <div className="App">
      {(typeof backendData.users === 'undefined')?(
        <p>Loading</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  );
}
  
export default App;


// function App() {
//   return (
//     <div className='container'>
//       <section className='ls'>
//       <Sidebar/>
//       </section>
//       <section className='md'>
//       <ChangePassword/>
//       </section>
//       <section className='rs'>
//       <PasswordCom/>
//       </section>
//     </div>
//   );
// }

// export default App;
