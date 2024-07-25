import LoginForm from './LoginForm'
import './App.css';
import Navbar from './Navbar';

function LoginPage() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
            <LoginForm />
            </div>
        </div>
        
    )
}

export default LoginPage