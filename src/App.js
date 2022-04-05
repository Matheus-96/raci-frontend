import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './common/navbar';
import { UserPrincipal } from './views/user/UserPrincipal'

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/usuarios' element={<UserPrincipal />} />
          <Route path='/atividades' />
          <Route path='/notificacoes' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;