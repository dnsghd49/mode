import './App.css';
import Main from './pages/main';
import Topbar from './components/Topbar';
import MainNav from './components/MainNav';

function App() {
  return (
    <div className="App">
      <Topbar />
      <MainNav />
      <Main />
    </div>
  );
}

export default App;
