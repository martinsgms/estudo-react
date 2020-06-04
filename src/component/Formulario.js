import React, { Component } from 'react';
import ClienteValidator from '../validator/ClienteValidator';
import Toast from './Toast';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validator = new ClienteValidator();
        
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

        let errors = [];
        errors = this.validator.validate(this.state);

        if(errors.length > 0) {
            errors.forEach(e => Toast.message('error', e));
            return;
        }

        Toast.message('success', 'Cliente cadastrado com sucesso!')
    };

    render() {

        const {nome, profissao} = this.state;

        return (
            <div className='row mt-20'>
                <form className='col s12'>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input
                                id="nome"
                                type="text"
                                name="nome"
                                value={nome}
                                onChange={this.inputListener}
                            />
                            <label htmlFor="nome" className='active'>Nome</label>
                        </div>
                    
                        <div className='input-field col s6'>
                            <input
                                id="profissao"
                                type="text"
                                name="profissao"
                                value={profissao}
                                onChange={this.inputListener}
                                className='validate'
                            />
                            <label htmlFor="profissao" className='active'>Profissão</label>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={this.submit}
                        className='waves-effect waves-light btn light-blue darken-2'>
                        Salvar
                    </button>
                </form>
            </div>
        );
    }
}

export default Formulario;
