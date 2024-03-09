
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
//pages
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Features from './components/Pages/Features'
import Home from './components/Pages/Home'

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/About" exact element={<About/>}/>
        <Route path="/Features" exact element={<Features/>}/>
        <Route path="/Contact" exact element={<Contact/>}/>    

      </Routes>
    </>

  );
}

export default App;
