import React, { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'antd';
import { Login } from './services/login'
import { Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Thread from './pages/Thread'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('生命周期')
  }, []);
  const login = () => {
    Login().then(e=>{
      console.log(e)
    })
  }
 
  return (
  
    <div className="App">
        <BrowserRouter>
      <Link to="Thread">q1</Link> 
       </BrowserRouter>
      
      <Button type="primary" onClick={ () => login() }>login</Button>
      <Button onClick={()=>setCount(count+1)}>{count}</Button>
     
    </div>
  )
}

export default App
