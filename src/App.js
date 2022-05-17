
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import NavBar from './Shared/NavBar/NavBar';

function App() {
  return (
    <div>

      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/' element={}></Route> */}
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
