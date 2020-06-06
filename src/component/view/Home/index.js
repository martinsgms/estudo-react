import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import './style/index.css';

import { Form } from '@unform/web'
import Table from "./Table";
import Input from './Form/Input';

const Home = () => {

  const handleSubmit = data => {
    console.log(data);
  }

  return (
    <>
      <div className='container'>
        <h3>Home</h3>
        
        <Form onSubmit={handleSubmit} >
          <div className='row mt-20'>
            <div className='col s12'>
              <div className='row'>
                <div className='input-field col s6'>
                  <Input name="nome" />
                  <label htmlFor="nome" className='active'>Nome</label>
                </div>
                <div className='input-field col s6'>
                  <Input name="profissao" />
                  <label htmlFor="profissao" className='active'>Profissão</label>
                </div>
              </div>
            </div>
          <button
            type="submit"
            className='waves-effect waves-light btn deep-purple darken-3'>
            Salvar
          </button>
          </div>
        </Form>
        <Table />
      </div>
    </>
  );
}

export default Home;