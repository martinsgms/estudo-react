import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkWraper = props => {
    return (
        <NavLink activeStyle={{backgroundColor: '#3e2390'}} {...props} />
    );
}

export default LinkWraper;

/*
    O NavLink faz a mesma coisa que o Link (alternar entre os componentes sem recarregar a página),
    porém, com recursos de estilização, no caso, aplicado para a página atual

    um Wraper serve para, caso a NavLink não funcione mais, ou troque de nome, etc,
    possamos ter um único ponto de manutenção
*/