import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import MainAppointment from './Pages/MainAppointment/MainAppointment';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import History from './Pages/Dashboard/History';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from  './Pages/Login/RequireAdmin'
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>

        <Route path='/main-appointment' element={
          <RequireAuth>
            <MainAppointment />
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointment />}></Route>
          <Route path="/dashboard/review" element={<MyReview />}></Route>
          <Route path="/dashboard/payment/:id" element={<Payment />}></Route>
          <Route path="/dashboard/history" element={<History />}></Route>
          <Route path="/dashboard/manageDoctor" element={<ManageDoctor />}></Route>
          <Route path="/dashboard/users" element={
            <RequireAdmin>
              <AllUsers />
            </RequireAdmin>
          }></Route>
          <Route path="/dashboard/addDoctor" element={
            <RequireAdmin>
              <AddDoctor />
            </RequireAdmin>
          }></Route>
        </Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
