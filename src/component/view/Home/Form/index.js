import React, { useRef } from 'react';
import Input from './Input';
import { useDispatch } from 'react-redux';
import Toast from '../../../Toast';
import * as Yup from 'yup';
import { Form } from '@unform/web'

const FormCliente = () => {
    const dispatch = useDispatch();
    const formRef = useRef(null);

    async function handleSubmit(formData, {reset}){
      console.log(formData);

        try {
            const schema = Yup.object().shape({
                nome: Yup.string().required('Informe o Nome'),
                profissao: Yup.string().required('Informe a Profissão')
            });

            await schema.validate(formData, {
                abortEarly: false
            });

            dispatch({type: 'ADD_CLIENTE', cliente: formData });
            Toast.message('success', 'Cliente cadastrado com sucesso!')
            
            formRef.current.setErrors({});
            reset();
            
        } catch (err) {
            if(err instanceof Yup.ValidationError) {
                console.log(err);
                const errorMessages = {};

                err.inner.forEach(e => errorMessages[e.path] = e.message);
                formRef.current.setErrors(errorMessages);
            }
        }
    }

    return (
        <>
        <Form ref={formRef} onSubmit={handleSubmit} >

          <div className='row mt-20'>
            <div className='col s12'>
              
              <div className='row'>
                <Input type='hidden' value={Math.floor(Math.random() * 100) + 1} name="id" readOnly/>
                
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

