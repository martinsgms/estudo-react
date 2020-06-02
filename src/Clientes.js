import React, { Component, Fragment } from 'react';
import Header from './Header';

class Clientes extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className='container'>
                    <h3>Clientes</h3>
                </div>
            </Fragment>
        );
    }
}

export default Clientes;
