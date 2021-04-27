import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { GetThreadList } from '../../services/thread';

function Thread() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('生命周期')
  }, []);

  const getThread = () => {
    GetThreadList().then(e=>{
      console.log(e)
    })
  }

  return (
    <div className="Thread">
      <Button type="primary" onClick={ () => getThread() }>get List</Button>
      <h1>get thread</h1>
      <Link to='/'><Button>路由</Button></Link>
    </div>
  )
}

export default Thread
