
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Register from './register'
import Login from './login'
import Header from './Header';
import Home from "./home";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <ToastContainer position='top-center' autoClose={2000}/>
      <Header/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="home" element={<Home/>} />
     </Routes>
    </div>
  );
}
  
export default App;
