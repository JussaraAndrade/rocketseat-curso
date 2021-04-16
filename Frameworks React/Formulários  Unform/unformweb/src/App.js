import './App.css';

import { Scope } from '@unform/core';
import { Form } from '@unform/web';

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
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <div className="App">
      <h1>oi</h1>

      <Form initialData={initialData} onSubmit={handleSubmit}>
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
