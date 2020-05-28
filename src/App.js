import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela';


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

  render() {
    return (
      <div className="App">
        <Tabela clientes={this.state.clientes} />
      </div>
    );
  }
}

export default App;
