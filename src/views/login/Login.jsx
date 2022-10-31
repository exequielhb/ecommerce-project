
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleLogin = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        navigate('/loginsc')
    }


  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h3>Login</h3>
      </div>
      <div>
        <input
          value={login.email}
            onChange={handleLogin}
          placeholder="Type your e-mail"
        />
      </div>
      <div>
        <input
          type="password"
          value={login.password}
            onChange={handleLogin}
          placeholder="Type your password"
        />
      </div>
      <button onClick={handleSubmit}>
        Submit
      </button>
      <div style={{ fontSize: '12px' }}>
          Dont't have an account?
          {' '}
          Register <span onClick={() => navigate('/register')}
          style={{ color: '#293462', fontWeight: 'bold', cursor: "pointer" }}>here</span>
      </div>
    </div>
  );
}
