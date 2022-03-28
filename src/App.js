// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className='container my-5' >
      <form>
        <div className='mb-3'>
          <label htmlFor="email" className='form-label' >Email</label>
          <input id="email" name="email" type="email" className='form-control' />
        </div>
        <div className='mb-3'>
          <label htmlFor="password" className='form-label' >Password</label>
          <input id="password" name="password" type="password" className='form-control' />
        </div>
        <div className='mb-3'>
          <label htmlFor="confirm-password" className='form-label' >Confirm Password</label>
          <input id="confirm-password" name="confirm-password" type="password" className='form-control' />
        </div>
      </form>
    </div>
  );
}

export default App;
