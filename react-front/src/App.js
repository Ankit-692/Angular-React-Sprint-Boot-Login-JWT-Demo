import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './components/Login';
import About from './components/About';
import SignUp from './components/SignUp';
import Data from './components/Data';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = '/' element = {<Login/>}/>
          <Route path = '/Signup' element = {<SignUp/>}/>
          <Route path = '/About' element = {<About/>}/>
          <Route path = '/data' element = {<Data/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
