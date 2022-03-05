import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './components/Users/Users';
import About from './components/About/About';
import Service from './components/Service/Service';
import SingleUserDetails from './components/SingleUserDetails/SingleUserDetails';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/user' element={<SingleUserDetails/>} />
       </Routes>
      </Router>


    </div>
  );
}

export default App;
