import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './common/navbar';
import { UserPrincipal } from './views/user/UserPrincipal'
import { Login } from './common/Login';
import { ActivityPrincipal } from './views/activity/ActivityPrincipal';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/usuarios' element={<UserPrincipal />} />
          <Route path='/atividades' element={<ActivityPrincipal/>} />
          <Route path='/notificacoes' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;