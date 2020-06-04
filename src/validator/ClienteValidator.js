import ReactValidator from 'validator';

class ClienteValidator {
    
    validate(state) {
        let errors = [];

        if(ReactValidator.isEmpty(state.nome))
            errors.push('Preencha o campo Nome');

        if(ReactValidator.isEmpty(state.profissao))
            errors.push('Preencha o campo Profissão');

        return errors;
    }
}

export default ClienteValidator;
