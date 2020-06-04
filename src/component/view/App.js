import React, { Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../../style/App.css';
import Form from "../Formulario";
import Header from '../Header';

import { useSelector } from 'react-redux';

const App = () => {
  const clientes = useSelector(state => state.data);

  return (
    <Fragment>
      <Header/>
      <div className='container'>
        <h3>Painel Principal</h3>
        <Form/>

        <ul>
          { clientes.map(c => <li key={c.id}>{c.nome}, {c.profissao} </li>)}
        </ul>

      </div>
    </Fragment>
  );
}

export default App;