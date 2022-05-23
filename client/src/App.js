import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import Topbar from './components/Topbar';
import MainNav from './components/MainNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <MainNav />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
