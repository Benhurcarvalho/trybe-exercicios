// import PasswordInput from './componets/PasswordInput';
// import PaletaCores from './componets/PaletaCores';
import logo from './trybe_logo.svg';
import LoginForm from './componets/LoginForm';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <img src={ logo } alt='logo da trybe' />
      </header>
    <main className='app'>
      <LoginForm />
    </main>
    {/* <PaletaCores /> */}
    {/* <PasswordInput /> */}
    </div>
  );
}

export default App;
