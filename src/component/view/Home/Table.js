import React from 'react';
import Delete from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';
import './style/index.css';
import Toast from '../../Toast';

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
    
    const dispatch = useDispatch();
    const stateClientes = useSelector(state => state.clientes);

    const handleDelete = cliente => {
        dispatch({type: 'RMV_CLIENTE', cliente: cliente});
        Toast.message('success', 'Removido com sucesso!');
    }

    return stateClientes.map(c => {
        return (
            <tr key = {c.id}>
                <td>{c.nome}</td>
                <td>{c.profissao}</td>
                <td><button className='waves-effect waves-light btn red darken-2'
                        onClick={() => handleDelete(c)}>
                        <Delete/>
                    </button>
                </td>
            </tr>
        );
    });
};


export default Table;
