import React, { useState,useEffect } from 'react'
import logo from '../logo.svg'
import '../App.css'
import { Button } from 'antd';
import { GetThreadList } from '../services/thread'

function Thread() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('生命周期')
    console.info('in thread')
  }, []);
  const GetThreadList = () => {
    GetThreadList().then(e=>{
      console.log(e)
    })
  }
  return (
    <div className="Thread">
      <Button type="primary" onClick={ () => GetThreadList() }>GetThreadList</Button>
      <Button onClick={()=>setCount(count+1)}>{count}</Button>
    </div>
  )
}

export default Thread
