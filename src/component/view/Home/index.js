import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './style/index.css';
import Table from "./Table";
import FormCliente from './FormCliente';


const Home = () => {

  return (
    <>
      <div className='container'>
        <h3>Home</h3>
        
        <FormCliente />
        <Table />

      </div>
    </>
  );
}

export default Home;