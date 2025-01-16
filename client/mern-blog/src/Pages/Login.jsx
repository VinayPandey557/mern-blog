import Header from "../components/Header"
export default function Login() {
    return (
      <>
      <Header/>
       <div>
        <form className="login">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password"/>
          <button>LogIn</button>
        </form>
       </div>
       </>
    )
} 