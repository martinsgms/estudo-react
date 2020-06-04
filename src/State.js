class State {

    /*  PONTO INTERESSANTE 
    *
    *   aqui percebi a necessidade de um gerenciador para o estado, para que seja possível
    *   centralizar os dados manipulados, e distribui-los facilmente entre os componentes
    *   da apllicação
    * 
    *   no modelo atual, assim que se cadastra um cliente, o novo dado não é refletido nos 
    *   demais componentes. não existe uma sincronização
    *   cada componente tem seu estado e ele pode não refletir mais o real estado atual da 
    *   aplicação.
    * 
    *   vi que o Redux é uma ferramenta que pode ajudar exatamente nesse problema, por isso
    *   ele será implementado aqui
    * 
    *   além disso, acerca dos componentes, vi que é possível utilizar o Primereact, que 
    *   dispõe de uma variedade de componentes com boas funcionalidades
    *
    **/
   
    static _state(newState) {
        let s = newState == undefined ? 
        {
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
                },
                {
                    id: 3,
                    nome: 'César',
                    profissao: 'Jornalista'
                },
                {
                    id: 5,
                    nome: 'Matilde',
                    profissao: 'Psicóloga'
                }
            ]
        }
        :
        newState;

        return s;
    }

    static get() {
        return State._state;
    }

    static set set(newState) {
        this.state = newState;
    }
}

export default State;
