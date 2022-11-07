import logo from './trybe_logo.svg';
import LoginForm from './componets/LoginForm';
import './App.css';
// import PasswordInput from './componets/PasswordInput';

function App() {
  return (
    <div>
      <header>
        <img src={ logo } alt='logo da trybe' />
      </header>
        <main className='app'>
          <LoginForm />
        </main>
    </div>
  );
}

export default App;
