import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import Profile from './components/Content/Profile/Profile';
import Messages from './components/Content/Messages/Messages';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';


function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavMenu />
      <div className="content">
        <Route path="/profile" render={() => <Profile ProfilePage={props.state.ProfilePage} dispatch={props.dispatch} />} />
        <Route path="/messages" render={() => <Messages MessagesPage={props.state.MessagesPage} />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
