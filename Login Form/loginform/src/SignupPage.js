import SignupForm from './SignupForm'
import './App.css';
import Navbar from './Navbar';

function SignupPage() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
            <SignupForm />
            </div>
        </div>
        
    )
}

export default SignupPage