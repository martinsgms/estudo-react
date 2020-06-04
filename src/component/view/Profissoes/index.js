import React from 'react';
import Header from '../../Header';
import { useSelector } from 'react-redux';

const Profissoes = () => {
    const clientes = useSelector(state => state.data);

    return (
        <>
            <Header />
            <div className='container'>
                <h3>Profissões</h3>

                <ul>
                    {clientes.map(c => <li key={c.id}> {c.profissao} </li>)}    
                </ul>

            </div>
        </>
    );
}

export default Profissoes;