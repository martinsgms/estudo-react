import React, { Component } from 'react';
import Delete from '@material-ui/icons/Delete';

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

const TableBody = props => {
    const linhas = props.clientes.map((cliente, index) => {
        return (
            <tr key = {index} id={`c${index}`} className='scale-transition'>
                <td>{cliente.nome}</td>
                <td>{cliente.profissao}</td>
                <td><button className='waves-effect waves-light btn red darken-2'
                        onClick = { () => {props.remover(index)} } >
                            <Delete/>
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
};

class Tabela extends Component {
    render() {

        const { clientes, remover } = this.props;

        return (
            <table className='highlight centered mt-20'>
                <TableHead />
                <TableBody clientes = { clientes } remover = { remover } />
            </table>
        );
    }
}

export default Tabela;
