import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Tabela from './Tabela';

function App() {

  const clientes = [
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
  ];

  return (
    <div className="App">
      <Tabela clientes = { clientes } />
    </div>
  );
}

export default App;
