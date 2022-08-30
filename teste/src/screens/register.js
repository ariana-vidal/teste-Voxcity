import React, { useState, useEffect } from 'react';

export default function Register() {
  const [disabled, setDisabled] = useState(true);
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if (cpfRegex.test(cpf) && password.length >= 6) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [cpf, password]);

  return (
    <section>
      <form className="register">
      <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              required
            />
          </label>

          <label htmlFor="cpf">
            CPF
            <input
              type="text"
              name="cpf"
              onChange={ ({ target }) => setCpf(target.value) }
              required
            />
          </label>

          <label htmlFor="senha">
            Senha
            <input
              type="password"
              name="senha"
              onChange={ ({ target }) => setPassword(target.value) }
              required
            />
          </label>

          <button
            type="button"
            disabled={ disabled }
          >
            Registrar
          </button>
      </form>
    </section>
  )
} 