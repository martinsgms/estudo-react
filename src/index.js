import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/view/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Clientes from './component/view/Clientes';
import Profissoes  from './component/view/Profissoes';
import Sobre  from './component/view/Sobre';

import './style/index.css';
import { Provider } from 'react-redux';
import store from './store';
import Header from './component/Header';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Header />
      <Switch>
        <Route path='/estudo-react' exact={true} component={Home} />
        <Route path='/estudo-react/clientes' component={Clientes} />
        <Route path='/estudo-react/profissoes' component={Profissoes} />
        <Route path='/estudo-react/sobre' component={Sobre} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
