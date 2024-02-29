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
          <div>
            <div className='button'>
              <a href='LoginPage.js'>Login</a>
            </div>

            <div className='button'>
              <a href='SigninPage.js'>Signup</a>
            </div>
          </div>
          
          <div>
        <h4>Brought to you with the power of <img className='reactLogo' src="\logo192.png"></img></h4>
      </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
