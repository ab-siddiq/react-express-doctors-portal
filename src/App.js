import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Register from "./Pages/Register/Register";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Shared/Footer/Footer";
import NavBar from "./Shared/NavBar/NavBar";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
         
        }>
           <Route index element={<MyAppointments></MyAppointments>}></Route>
           <Route path="myReview" element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        {/* <Route path='/' element={}></Route> */}
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
