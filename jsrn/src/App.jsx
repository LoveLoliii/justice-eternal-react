import React, { useState, useEffect, Fragment } from 'react'
import './App.css'
import { Button } from 'antd';
import { BrowserRouter, Link, Route,Switch, Router, HashRouter, Redirect } from 'react-router-dom';
import Rts from './router';
import ThreadC from './pages/thread/thread-c' 
import Post from './pages/post/post'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('生命周期')
  }, []);

  return (
    <div className="App">
      <BrowserRouter>

        
        <Switch>
          <Route path="/je/threadc" component={ThreadC}></Route>
          <Route path="/je/post/:id/:title" component={Post}></Route>
        </Switch>
        <Link to="/je/threadc">Thread List</Link>
        <Link to="/je/">❤ Index</Link>

    </BrowserRouter>
    </div>
  )
}

export default App
