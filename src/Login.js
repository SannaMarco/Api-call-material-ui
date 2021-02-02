import React, {useState} from 'react'
import LoginForm from './components/loginForm'
import axios from 'axios'

function Login() {


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

  const [randomUserData, setRandomUserData] = useState('')





  const adminuser = {
    email: 'a@a',
    password: 'admin'
  }
  
    const [user, setUser] = useState({name:"", email:""})
    const [error, setError] = useState("");

    const Login = details => {
      console.log(details);

      if(details.email === adminuser.email && details.password === adminuser.password){
        console.log("logged in")
        setUser({
          name: details.name,
          email: details.email
        })
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

      {(user.email !== "") ? (
        <div>
          <h2>Welcome, <span>{user.name}</span></h2>
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
