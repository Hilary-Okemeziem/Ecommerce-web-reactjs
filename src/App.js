import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {Routes, Route} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import ShopPage from "./components/ShopPage";
import NotFound from "./components/NotFound";
import Checkout from "./components/Checkout";


function App() {
  return (
    <>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home rowID='1'/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/products/:productId' element={<ProductPage/>}/>
        <Route path='/shoppage' element={<ShopPage/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes> 
    </>
  );
}

export default App;
