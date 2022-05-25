import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main/Main';
import Topbar from './components/Topbar';
import MainNav from './components/MainNav';
import Carts from './components/Carts';
import ShopAll from './pages/ShopAll/ShopAll';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import FashionSus from './pages/FashionSus/FashionSus';
// import Footer from './components/Footer';
import Create from './components/Create';
import Edit from './components/Edit';
import SellerPage from './pages/SellerPage/SellerPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <MainNav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/shop-all" element={<ShopAll />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/fashion-sustainability" element={<FashionSus />} />
          <Route path="/dashboard" element={<SellerPage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
      {/* <Create /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
