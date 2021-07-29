import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import Profile from './components/Content/Profile/Profile';
import Messages from './components/Content/Messages/Messages';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import avatar1 from './img/avatar/avatar_1.jpg'


function App() {
  // Собеседники с которыми ведутся диалоги
  let Users = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Ivan" },
    { id: 3, name: "Kirill" },
    { id: 4, name: "Alexey" },
    { id: 5, name: "Sasha" },
  ]

  // Cообщения пользователей
  let Dialogs = [
    { message_content: "Hi" },
    { message_content: "How are you?" },
    { message_content: "I'm fine, thank you!" },
    { message_content: "Today is a good weather! Let's go for a walk" },
    { message_content: "Yeah, sure" }
  ]

  // Контент постов
  let post_content = [
    { message: "Hi, this is my profile!", avatar: avatar1 },
    { message: "Today I made an amazing coffee! Learned to cook cappuccino. I love it :)", avatar: avatar1 },
    { message: "Good morning everybody! It's very beautiful sunny day ^^", avatar: avatar1 },
  ]

  return (
    <div className="app-wrapper">
      <Header />
      <NavMenu />
      <div className="content">
        <Route path="/profile" render={() => <Profile post_content={post_content} />} />
        <Route path="/messages" render={() => <Messages users={Users} dialogs={Dialogs} />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
