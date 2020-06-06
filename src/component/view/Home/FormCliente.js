import React from 'react';
import Input from './Form/Input';
import { useDispatch } from 'react-redux';
import Toast from '../../Toast';
import { Form } from '@unform/web'

const FormCliente = () => {
    const dispatch = useDispatch();

    const handleSubmit = (formData, {reset}) => {
      console.log(formData);
  
        //errors.forEach(e => Toast.message('error', e));
  
      dispatch({type: 'ADD_CLIENTE', cliente: formData });
      Toast.message('success', 'Cliente cadastrado com sucesso!')
      reset();
    }

    return (
        <>
        <Form onSubmit={handleSubmit} >

          <div className='row mt-20'>
            <div className='col s12'>
              
              <div className='row'>
                <Input type='hidden' value={Math.floor(Math.random() * 100) + 1} name="id" readonly/>
                
                <div className='input-field col s6'>
                  <Input name="nome" />
                  <label htmlFor="nome" className='active'>Nome</label>
                </div>
                
                <div className='input-field col s6'>
                  <Input name="profissao" />
                  <label htmlFor="profissao" className='active'>Profissão</label>
                </div>
              </div>

            </div>

            <button type="submit" className='waves-effect waves-light btn deep-purple darken-3'>
              Salvar
            </button>

          </div>

        </Form> 
        </>
    );
}

export default FormCliente;

