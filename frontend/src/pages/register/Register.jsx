import { Link } from "react-router-dom"
import "./register.scss"
import { useState } from "react"
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('',{username,email,name,password})
        .then(result => console.log(result))
        .catch(err=> console.log(err))
    }
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social Media</h1>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username"
            onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register