import React, {useState} from 'react'
import LoginForm from './components/loginForm'
import axios from 'axios'

function Login() {
  const [randomUserData, setRandomUserData] = useState('')
  const [user, setUser] = useState({name:"", email:""})
  const [error, setError] = useState("");
  const {name, email} = user;

  const url = 'https://randomuser.me/api';

  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  const Login = details => {
    const { email, password, name } = details;
    const adminUser = {
      email: 'a@a',
      password: 'admin'
    }

    if(email === adminUser.email && password === adminUser.password){
      console.log("logged in")
      setUser({ name, email })
    }else{
      console.log('details wrong')
      setError("Details do not match")
    }
  }

  const Logout = () => {
      console.log("Logout")
      setUser({
        name:"",
        email:""
      })
  }

  return (
    <div className="login">
      {(email !== "") ? (
        <div>
          <h2>Welcome, <span>{name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div>
        <LoginForm login={Login} error={error} />
        <button onClick={fetchData}>FETCHDATA</button>
        </div>
      )}
    </div>
  )
}

export default Login
