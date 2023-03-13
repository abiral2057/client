
import { Route, Routes } from 'react-router-dom';
import Signup from "./pages/signup";
import './App.css';
import Login from "./pages/login";
import Home from './pages/home';
import { FaBeer, FaEye } from "react-icons/fa";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/">
        {/* <Route index element ={<Home/>}/>*/}
        <Route path='signup' element={<Signup/>}/> 
        <Route path='login' element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
