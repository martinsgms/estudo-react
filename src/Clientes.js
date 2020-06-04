import React, { Component, Fragment } from 'react';
import Header from './Header';
import DataTable from 'react-data-table-component';
import State from './State';

class Clientes extends Component {
    
    state = State.get;
    
    render() {
        return (
            <Fragment>
                <Header/>
                <div className='container'>
                    <h3>Clientes</h3>
                    <DataTable
                        columns={[{name:'nome', selector: 'nome', sortable: true}]}
                        data={this.state.clientes}
                    />
                </div>
            </Fragment>
        );
    }
}

export default Clientes;
