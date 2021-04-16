import './App.css';

import { Scope } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef } from 'react';

import Input from './components/Form/Input';

const initialData = {
  email: "diego@rocketseat.com.br",
  address: {
    city: 'Rio do Sul'
  }
};

// const user = {
//   name: 'Diego',
//   address: {
//     street: 'Rua teste',
//     number: '123',
//   }
// }

function App() {
  const formRef = useRef(null);

  function handleSubmit(data, { reset }) {
    if(data.name == ""){
     //formRef.current.setFieldError('name', 'O nome é obrigatório')
     //formRef.current.setFieldError('address.city', 'A cidade é obrigatório')

     formRef.current.setErrors({
        name: 'O nome é obrigatório',
        address: {
          city: 'A cidade é obrigatória'
        }
     });
    }
    console.log(data);
    
    reset();
  }

  return (
    <div className="App">
      <h1>oi</h1>

      <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
        <Input name="name" />
        <Input type="email" name="email" />

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
