import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './style/index.css';
import Form from "./Formulario";
import Header from '../../Header';

import { useSelector } from 'react-redux';

const Home = () => {
  const clientes = useSelector(state => state.data);

  return (
    <>
      <Header/>
      <div className='container'>
        <h3>Home</h3>
        <Form/>

        <ul>
          { clientes.map(c => <li key={c.id}>{c.nome}, {c.profissao} </li>)}
        </ul>

      </div>
    </>
  );
}

export default Home;