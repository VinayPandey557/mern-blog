import Header from "../components/Header"
import { useState } from "react"
import axios from "axios";

export default function RegisterPage() {
    const [username ,setUserName] = useState('');
    const [password ,setPassword] = useState('');

   const register = async (e) => {
      e.preventDefault();
      try{
        const response = await axios.post("http://localhost:4000/register", {
            username,
            password
        });
      console.log("Response", response.data);
      } catch(error) {
        console.log('Error', error);
      }
    };
    return <div>
         <Header></Header>
        <form className="register">
            <h1>Register</h1>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUserName(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <button onClick={register}>Register</button>
        </form>
    </div>
}