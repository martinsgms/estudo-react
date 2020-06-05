import React from 'react';
import Delete from '@material-ui/icons/Delete';
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
                <th>Nome</th>
                <th>Profissão</th>
                <th>Ações</th>
            </tr>
        </thead>
    );
};

const TableBodyData = () => {
    
    return useSelector(state => state.data).map(c => {
        return (
            <tr key = {c.id} id={`c${c.id}`} className='scale-transition'>
                <td>{c.nome}</td>
                <td>{c.profissao}</td>
                <td><button className='waves-effect waves-light btn red darken-2'>
                        <Delete/>
                    </button>
                </td>
            </tr>
        );
    });
};

export default Table;
