import React, { Component, Fragment } from 'react';
import Header from './Header';

class Profissoes extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h3>Profissões</h3>
                </div>
            </Fragment>
        );
    }
}

export default Profissoes;
