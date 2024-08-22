import React, { useState } from 'react';

function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Connexion</h2>
      <br />
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
        <input 
          type="email" 
          className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="exampleInputPassword1" 
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      ou
      <div className="mb-3">
        <button className="google">
          <a href="http://localhost:3000/auth/google">
            Connexion avec Google
          </a>
        </button>
      </div>
      <button type="submit" className="btn btn-primary">
        Se connecter
      </button>
    </form>
  );
}

export default Connexion;
