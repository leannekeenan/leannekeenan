import LoginForm from './LoginForm'
import './App.css';
import Navbar from './Navbar';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Welcome />
        <div className="App">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
