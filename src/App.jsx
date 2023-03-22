
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Menu } from './components/Menu/Menu';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { Login } from './pages/Login/Login';
import { NotFound } from './pages/NotFound/NotFound';
import { Root } from './pages/Root/Root';
import { Secao1 } from './components/SecaoHome/Secao1';
import { Secao2 } from './components/SecaoHome/Secao2';
import { Secao3 } from './components/SecaoHome/Secao3';




function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 
          ANINHAMENTO DE ROTAS são aplicações de roteamento em páginas web onde o conteúdo do componente é alterado em função da rota acessada na página.
          Exemplo: exemplo.com/usuarios/3245/perfil
          Area de "perfil" do usuário "3245" dentro da relação de "usuarios". 
          */}

          <Route path='/' element={<Root />}>

            <Route path="/" element={<Home />}>
              <Route path='secao1' element= {<Secao1 />} />
              <Route path='secao2' element= {<Secao2 />} />
              <Route path='secao3' element= {<Secao3 />} />
            </Route>
            
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
