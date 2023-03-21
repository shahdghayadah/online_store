import logo from './logo.svg';
import './App.css';
import Home from './page/home';
import NavBar from './components/navBar';
import { Routes, Route } from 'react-router-dom';
import About from './page/about';
import ProductDetailesPage from './page/productDetails'
import LoginPage from './page/Login';
import ProfilePage from './page/profile';
import ProtectRouter from './components/protectRotuer';
// TODO step 6 : create about page to using in route

// TODO step 7 : define Routes , for home page  , about page , product with :id
function App() {
  return (
    <div className="App">
      
      <NavBar />
      
      <Routes>
      <Route path="/" element={
      <Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/profile" element={
      <ProtectRouter>
        <ProfilePage/>
      </ProtectRouter>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path='/product/:id' element={ <div>   <ProductDetailesPage/></div>} />

      </Routes>
    </div>
  );
}

export default App;
