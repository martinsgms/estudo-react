import React, { Component } from 'react';

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
            <tr key = {index}>
                <td>{cliente.nome}</td>
                <td>{cliente.profissao}</td>
                <td><button onClick = { () => {props.remover(index)} } >Remover</button></td>
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
            <table>
                <TableHead />
                <TableBody clientes = { clientes } remover = { remover } />
            </table>
        );
    }
}

export default Tabela;
