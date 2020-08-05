import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CadastroVideo from './pages/cadastro/Video'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

