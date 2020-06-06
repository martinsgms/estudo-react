import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import './style/index.css';

import Form from "./Formulario";
import Table from "./Table";

const Home = () => {
  return (
    <>
      <div className='container'>
        <h3>Home</h3>
        <Form/>
        <Table />
      </div>
    </>
  );
}

export default Home;