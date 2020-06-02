import React, { Component, Fragment } from 'react';
import Header from './Header';

class Sobre extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h3>Sobre</h3>
                </div>
            </Fragment>
        );
    }
}

export default Sobre;
