import { useState } from 'react';
import './App.css';
import UserForm from "./Components/UserForm";
import AllUsers from './Components/AllUsers';

function App() {
const [logeed,setLogged] = useState(false)

  return (
    <div className="App">
    {!logeed ? <UserForm setLogged={setLogged} /> : <AllUsers /> }
    </div>
  );
}

export default App;
