import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import IndexPage from './Pages/IndexPage'
import Layout from './components/Layout'
import RegisterPage from './Pages/RegisterPage'




function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}></Route>
        <Route index element={<IndexPage />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
    </Routes>
      
    
     
  )
}

export default App
