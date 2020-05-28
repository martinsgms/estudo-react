import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);
        
        this._stateInicial = {
            nome: '',
            profissao: ''
        }

        this.state = this._stateInicial;
    }
    
    _inputListener = e => {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        });
    };

    render() {

        const {nome, profissao} = this.state;

        return (
            <form>
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={this._inputListener}
                    />

                <label htmlFor="profissao">Profissão</label>
                <input
                    id="profissao"
                    type="text"
                    name="profissao"
                    value={profissao}
                    onChange={this._inputListener}
                    />
                <button type="button">Salvar</button>
            </form>
        );
    }
}

export default Formulario;
