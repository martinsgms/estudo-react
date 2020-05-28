import React, { Component, Fragment } from 'react';
import './App.css';

import Tabela from './Tabela';
import Form from "./Formulario";

class App extends Component {
  
  state = {
    clientes: [
      {
        nome: 'Juliana',
        profissao: 'Dentista'
      },
      {
        nome: 'Kleber',
        profissao: 'Caminhoneiro'
      },
      {
        nome: 'César',
        profissao: 'Jornalista'
      },
      {
        nome: 'Matilde',
        profissao: 'Psicóloga'
      }
    ]
  };

  remover = (index) => {
    const { clientes } = this.state;
    
    this.setState({
      clientes : clientes.filter((cliente, posAtual) => {
        return posAtual !== index;
      })
    });
  }

  render() {
    return (
      <Fragment>
        <Tabela clientes={this.state.clientes} remover = {this.remover} />
        <Form />
      </Fragment>
    );
  }
}

export default App;
