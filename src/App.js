import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import Navbar from './common/header/Navbar';
import Details from './components/Details';
import Contactus from './components/Contactus';
import MoreDetails from './components/MoreDetails'
import About from './About'
import Main2 from './components/Details';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Immigrant-Emporium" exact element={<MainPage />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/contact-us' exact element={<Contactus />} />
        <Route path='/:id' exact element={<Main2 />} />
        <Route path='/:id/:details' exact element={<MoreDetails />} />
      </Routes>
    </>
  );
}

export default App;
