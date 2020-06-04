import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Delete from '@material-ui/icons/Delete';
import DataTable from 'react-data-table-component';
import './App.css';
import Form from "./Formulario";
import Header from './Header';
import State from './State';
import styled from 'styled-components'

// o styled recebe o componente e o devolve com o css que configurarmos no template string
// o componente pode ter classes default que podemos modificar, é o caso abaixo

const TableWrapper = styled(DataTable)`
  .rdt_TableRow {
    color: red
  }
`;

class App extends Component {
  
  state = State.get;

  columns = [
    {name:'Nome', selector: 'nome', sortable: true},
    {name:'Profissão', selector: 'profissao', sortable: true},
    {
      name:'Ações',
      cell: row => 
        <button 
          className='waves-effect waves-light btn red darken-2'
          onClick={() => {this.remover(row.id)}}>
            <Delete />
        </button>
    }
  ];

  remover = (id) => {
    this.fadeOutAdd(id);

    setTimeout(() => {
      this.fadeOutRemove(id);

      const { clientes } = this.state;
      this.setState({
        clientes : clientes.filter((cliente) => {
          return cliente.id !== id;
        })
      });
    }, 135)
  }

  fadeOutAdd = (id) => {
    document.querySelector(`#row-${id}`)
      .classList.add('scale-out');
  }

  fadeOutRemove = (id) => {
    document.querySelector(`#row-${id}`)
      .classList.remove('scale-out');
  }

  submitListener = cliente => {
    this.state.set({
      clientes: [...this.state.clientes, cliente]
    })
  };

  
  render() {
    console.log(this.state);

    return (
      <Fragment>
        <Header/>
        <div className='container'>
          <h3>Painel Principal</h3>
          <Form submitListener = {this.submitListener}/>
        
        
          <TableWrapper
            className='highlight centered mt-20'
            columns={this.columns}
            data={this.state.clientes}
            />
        

        </div>
      </Fragment>
    );
  }
}

export default App;
