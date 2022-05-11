import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import MainAppointment from './Pages/MainAppointment/MainAppointment';

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/main-appointment' element={<MainAppointment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
