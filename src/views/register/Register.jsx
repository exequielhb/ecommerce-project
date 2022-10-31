
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Register = () => {

    const [register, setRegister] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    const handleRegister = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        navigate('/loginsc')
    }

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h3>Register</h3>
      </div>
      <div>
        <input
            value={register.email}
            onChange={handleRegister}
          placeholder="Type your e-mail"
        />
      </div>
      <div>
        <input
          type="password"
            value={register.password}
            onChange={handleRegister}
          placeholder="Type your password"
        />
      </div>
      <button onClick={handleSubmit}>
        Submit
      </button>
      <div style={{ fontSize: '12px' }}>
          Already have an account?
          {' '}
          Please <span onClick={() => navigate('/login')}
          style={{ color: '#293462', fontWeight: 'bold', cursor: "pointer" }}>sign in</span>
      </div>
    </div>
  );
}
