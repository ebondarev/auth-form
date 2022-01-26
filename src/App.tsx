import React, { useRef } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Form } from './components/Form';
import { InputField } from './components/InputField';
import { InputPassword } from './components/InputPassword';

function App() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <Form
      legend="Authorization"
      fields={[
        <InputField
          type="email"
          placeholder="some@email.com*"
          required={true}
          ref={emailRef}
        />,
        <InputPassword
          placeholder="password*"
          autoComplete="current-password"
          required={true}
          ref={passwordRef}
        />,
        <Button type="submit">Submit</Button>
      ]}
      onSubmit={(event) => {
        event.preventDefault();
        if (!emailRef.current || !passwordRef.current) return;
        const formData = new FormData();
        formData.set('email', emailRef.current.value);
        formData.set('password', passwordRef.current.value);
        // Send to a server
      }}
    />
  );
}

export default App;
