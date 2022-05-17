
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointmnet from './Pages/Appointmnet/Appointmnet';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import Footer from './Shared/Footer/Footer';
import NavBar from './Shared/NavBar/NavBar';

function App() {
  return (
    <div>

      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointmnet></Appointmnet>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        {/* <Route path='/' element={}></Route> */}
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
