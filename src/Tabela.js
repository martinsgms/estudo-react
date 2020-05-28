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

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Gabriel</td>
                <td>Programador</td>
                <td><button>Remover</button></td>
            </tr>
            <tr>
                <td>Paulo</td>
                <td>Médico</td>
                <td><button>Remover</button></td>
            </tr>
        </tbody>
    );
};

class Tabela extends Component {
    render() {
        return (
            <table>
                <TableHead />
                <TableBody />
            </table>
        );
    }
}

export default Tabela;
