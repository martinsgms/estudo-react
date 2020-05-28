import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);
        
        this.stateInicial = {
            nome: '',
            profissao: ''
        }

        this.state = this.stateInicial;
    }
    
    inputListener = e => {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        });
    };

    submit = () => {
        this.props.submitListener(this.state);
        this.setState(this.stateInicial)
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
                    onChange={this.inputListener}
                    />

                <label htmlFor="profissao">Profissão</label>
                <input
                    id="profissao"
                    type="text"
                    name="profissao"
                    value={profissao}
                    onChange={this.inputListener}
                    />
                <button type="button" onClick={this.submit}>Salvar</button>
            </form>
        );
    }
}

export default Formulario;
