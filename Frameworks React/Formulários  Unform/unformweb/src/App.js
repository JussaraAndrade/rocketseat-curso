import './App.css';

import { Scope } from '@unform/core';
import { Form } from '@unform/web';
import React, { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';

import Input from './components/Form/Input';


function App() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string()
          .email("Digite  um e-mail válido")
          .required("O e-mail é obrigatório"),
        address: Yup.object().shape({
          city: Yup.string()
            .min(3, "No mínimo 3 caracteres")
            .required("A cidade é obrigatporia"),
        }),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      formRef.current.setErrors({});

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
       const errorMessages = {};

       err.inner.forEach(error => {
        errorMessages[error.path] = error.message;
       })

       formRef.current.setErrors(errorMessages);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      formRef.current.setData({
        name: 'Diego Fernandes',
        email: 'diego@rocketseat.com.br',
        address: {
          city: 'Rio do Sul'
        }
      })
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h1>oi</h1>

      <Form ref={formRef}  onSubmit={handleSubmit}>
        <Input name="name" />
        <Input name="email" />

        <Scope path="address">
          <Input name="street" />
          <Input name="neighborhood" />
          <Input name="city" />
          <Input name="state" />
          <Input name="number" />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;
