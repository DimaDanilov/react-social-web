import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import MessagesContainer from './components/Content/Messages/MessagesContainer';
import UsersContainer from './components/Content/Users/UsersContainer';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';


function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavMenu />
      <div className="content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/messages" render={() => <MessagesContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
