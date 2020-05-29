import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Tabela from './Tabela';
import Form from "./Formulario";
import Header from './Header';

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
    ],
    fadeout: {
      classname: 'scale-transition scale-out'
    }
  };

  remover = (index) => {
  
    this.fadeOutAdd(index);

    setTimeout(() => {
      this.fadeOutRemove(index);

      const { clientes } = this.state;
      this.setState({
        clientes : clientes.filter((cliente, posAtual) => {
          return posAtual !== index;
        })
      });
    }, 135)
  }

  fadeOutAdd = (index) => {
    document.querySelector(`#c${index}`)
      .classList.add('scale-out');
  }

  fadeOutRemove = (index) => {
    document.querySelector(`#c${index}`)
      .classList.remove('scale-out');
  }

  submitListener = cliente => {
    this.setState({
      clientes: [...this.state.clientes, cliente]
    })
  };

  render() {
    return (
      <Fragment>
        <Header/>
        <div className='container'>
          <Tabela clientes = {this.state.clientes} remover = {this.remover} />
          <Form submitListener = {this.submitListener}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
