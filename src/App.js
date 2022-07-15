import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import {Routes, Route, Router} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import ShopPage from "./components/ShopPage";

function App() {
  return (
    <ThemeProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home rowID='1'/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/products/:productId' element={<ProductPage/>}/>
        <Route path='/shoppage' element={<ShopPage/>}/>
      </Routes> 
      <Footer/> 
    </ThemeProvider>
  );
}

export default App;
