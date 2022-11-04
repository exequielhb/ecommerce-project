
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// toasts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import from firebase config
import { loginUser } from "../../firebase/firebase"

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    loginUser(email, password)
      .then((userCredential) => {
        toast.success("Login successful")
        navigate('/');
      })
      .catch((error) => {
        toast.error("Login failed")
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h3>Login</h3>
      </div>
      <div>
        <input
          value={email}
          onChange={handleEmail}
          placeholder="Type your e-mail"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Type your password"
        />
      </div>
      <button onClick={handleSubmit}>
        Submit
      </button>
      <div style={{ fontSize: '12px' }}>
          Dont't have an account? Register {' '}
          <span 
            onClick={() => navigate('/register')}
            style={{ color: '#293462', fontWeight: 'bold', cursor: 'pointer' }}
          >
            here
          </span>
      </div>
      <ToastContainer />
    </div>
  );
}
