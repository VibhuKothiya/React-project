import { Route, Routes } from "react-router-dom";
import './App.css';

//Admin
import AdminHeader from './Admin/Header/AdminHeader';
import Home from './Admin/Pages/Home'
import Contact from './Admin/Pages/Contact'
import About from './Admin/Pages/About'
import Product from './Admin/Pages/Product'
import Users from './Admin/Pages/Users'
import Services from "./Admin/Pages/Services";


//User
import UserNav from './User/Header/UserNav';

function App() {
  let role = 'Admin'

  if(role === 'Admin'){
    return (
      <>
        <AdminHeader />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" exact element={<Users />} />
          <Route path="/product" exact element={<Product />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/services" exact element={<Services/>} />
          <Route />
        </Routes>

      </>      
    );
  }
  else if(role === 'User'){
    return (
      <>
        <UserNav />
      </>      
    );
  }
  else{
    return <h1>page 404 not found</h1>;
  }
}

export default App;
