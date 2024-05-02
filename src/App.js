import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Error404 from './components/Error404';
import Users from './components/Users';

function App() {
  let str = '1001010101111011000000111';
  let search = '1';
  let count = str.split(search).length - 1;
  console.log(count);
  let isLoggedIn = false;
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contacts' element={<Contacts />}></Route>
        <Route path='/users/*' element={<Users />}></Route>
        <Route path='/redirect/*' element={<Navigate to={'/'} />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
