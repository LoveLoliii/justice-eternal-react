import React, { useState,useEffect,Fragment } from 'react'
import './App.css'
import { Button } from 'antd';
import { Login } from './services/login'
import { BrowserRouter, Route } from 'react-router-dom';
import Capp from './pages/form/index'
import Thread from './pages/thread/thread-c'

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
      {/* <Button type="primary" onClick={ () => login() }>login</Button>
      <Button onClick={()=>setCount(count+1)}>{count}</Button> */}
      <Fragment>
          <BrowserRouter>
            {/* <div>
              <Route path='/capp' exact component={Capp}></Route>
            </div> */}
            <div>
              <Route path='/' exact component={Thread}></Route>
            </div>
          </BrowserRouter>
        </Fragment>
    </div>
  )
}

export default App
