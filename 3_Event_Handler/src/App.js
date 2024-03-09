import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginPage/LoginForm";
import Cards from './components/ProductsPage/Cards'


function App() {
  return (
    <>
    
    
    <Routes>
      <Route path="/" exact element={<LoginForm />}/>
      <Route path="/ProductsPage/Cards" exact element={<Cards/>}/>
    </Routes>
    </>
  );
}

export default App;
