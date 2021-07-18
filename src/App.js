import './App.css';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Profile from './components/Profile';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavMenu />
      <Profile />
    </div>
  );
}

export default App;
