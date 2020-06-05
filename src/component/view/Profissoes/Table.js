import React from 'react';
import { useSelector } from 'react-redux';
import './style/index.css';

const Table = () => {
    return (
        <table className='centered mt-20'>
            <TableHead />
            <tbody><TableBodyData /></tbody>
        </table>
    );
}

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Profissão</th>
            </tr>
        </thead>
    );
};

const TableBodyData = () => {
    
    return useSelector(state => state.clientes).map(c => {
        return (
            <tr key = {c.id} id={`c${c.id}`} className='scale-transition'>
                <td>{c.profissao}</td>
            </tr>
        );
    });
};

export default Table;
