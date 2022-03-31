// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleValidation = (e) => {
    e.preventDefault();
    setError("");
    !isEmail(email) ? setError("Erreur de saisie sur l'email") : setError("");
    if(password.length<5){
      setError("Le mdp doit avoir au minimum 4 caractères")
    }
  }

  return (
    <div className='container my-5' >
      <form onSubmit={handleValidation}>
        <div className='mb-3'>
          <label htmlFor="email" className='form-label' >Email</label>
          <input id="email" name="email" type="email" className='form-control'
          value={email}
          onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="password" className='form-label' >Password</label>
          <input id="password" name="password" type="password" className='form-control'
                    value={password}
                    onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="confirm-password" className='form-label' >Confirm Password</label>
          <input id="confirm-password" name="confirm-password" type="password" className='form-control' />
        </div>
        {error && <p className='alert'>{error}</p>}
        <button type="submit" >Valider</button>
      </form>
    </div>
  );
}

export default App;
