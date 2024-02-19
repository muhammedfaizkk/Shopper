import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarsh from './components/navbar/Navbarsh';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Shopcategory from './pages/Shopcategory';
import Product from './pages/Product';
import Footer from './components/footer/Footer';
import men_banner from '../src/assets/banner_mens.png'
import women_banner from '../src/assets/banner_women.png'
import kids_banner from '../src/assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbarsh />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcategory banner={men_banner} category='men' />} />
          <Route path='/womens' element={<Shopcategory banner={women_banner} category='women' />} />
          <Route path='/kids' element={<Shopcategory banner={kids_banner} category='kid' />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
        </Routes>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
