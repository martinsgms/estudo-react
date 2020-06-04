import React, { Component, Fragment } from 'react';
import Header from './Header';
import DataTable from 'react-data-table-component';
import State from '../State';

class Profissoes extends Component {
    
    state = State.get();
    
    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h3>Profissões</h3>
                    <DataTable
                        columns={[{name:'Profissão', selector: 'profissao', sortable: true}]}
                        data={this.state.clientes}
                    />
                </div>
            </Fragment>
        );
    }
}

export default Profissoes;
