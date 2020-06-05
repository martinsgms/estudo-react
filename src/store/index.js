import { createStore } from 'redux';

const INIT_STATE = {
    clientes: [
        {
            id: 1,
            nome: 'Juliana',
            profissao: 'Dentista'
        },
        {
            id: 2,
            nome: 'Kleber',
            profissao: 'Caminhoneiro'
        }
    ]
}

function cliente(state = INIT_STATE, action) {
    switch (action.type) {
        case 'ADD_CLIENTE':
            return { ...state, clientes: [ ...state, action.cliente ] };
        default:
            return state;
    }
}

const store = createStore(cliente);

export default store;
