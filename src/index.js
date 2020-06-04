import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './component/view/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Clientes from './component/view/Clientes';
import Profissoes  from './component/view/Profissoes';
import Sobre  from './component/view/Sobre';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={App} />
        <Route path='/clientes' component={Clientes} />
        <Route path='/profissoes' component={Profissoes} />
        <Route path='/sobre' component={Sobre} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
