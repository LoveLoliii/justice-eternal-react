import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';

function Capp() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('生命周期')
  }, []);
  return (
    <div className="Capp">
      <h1>5555</h1>
      <Link to='/'><Button>路由</Button></Link>
    </div>
  )
}

export default Capp
