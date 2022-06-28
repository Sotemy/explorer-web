import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {ToastContainer} from "react-toastify"
import NavigationBar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavigationBar/>

          <Routes>
          <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>

        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
