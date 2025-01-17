import { useState } from "react"
import Header from "../components/Header"
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function Login() {
  const [username , setUsername] = useState('');
  const [password , setPassword] =useState('');
  const navigate = useNavigate();

     const login = async (e) => {
      e.preventDefault();
     try {
      const response = await axios.post("http://localhost:4000/login", {
        username, 
        password
      });
      localStorage.setItem("token", response.data.token);
      alert("Sign in successfull");
      navigate("/");
     
     } catch(error) {
      alert("error while login", error.response?.data || error.message);
     } 
     }
    return (
      <>
      <Header/>
       <div>
        <form className="login" onSubmit={login}>
          <h1>Login</h1>
          <input type="text" placeholder="username"  value={username} onChange={(e) => {
            setUsername(e.target.value);
          }} />
          <input type="password" placeholder="password" value={password} onChange={(e) => {
            setPassword(e.target.value)
          }}/>
          <button>LogIn</button>
        </form>
       </div>
       </>
    )
} 