import './App.css';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import Profile from './components/Profile/Profile';


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
