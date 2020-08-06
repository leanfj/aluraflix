import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/categoria';
import Pagina404 from './pages/404'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="" component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

