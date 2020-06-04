import React, { Fragment } from 'react';
import Header from '../Header';
import { useSelector } from 'react-redux';

const Clientes = () => {
    const clientes = useSelector(state => state.data);

    return (
        <Fragment>
            <Header/>
            <div className='container'>
                <h3>Clientes</h3>
                
                <ul>
                    { clientes.map(c => <li key={c.id}>{c.nome}</li>) }
                </ul>
                
            </div>
        </Fragment>
    );
}

export default Clientes;
