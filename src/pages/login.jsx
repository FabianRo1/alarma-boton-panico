import React from 'react';

export default function Login({ onLogin }) {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={onLogin}>Iniciar sesión</button>
    </div>
  );
}

