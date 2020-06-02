import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Clientes from './Clientes';
import Profissoes  from './Profissoes';
import Sobre  from './Sobre';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App} />
      <Route path='/clientes' component={Clientes} />
      <Route path='/profissoes' component={Profissoes} />
      <Route path='/sobre' component={Sobre} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
