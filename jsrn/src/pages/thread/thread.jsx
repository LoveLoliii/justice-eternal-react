import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { GetThreadList } from '../../services/thread';
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;
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
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  };
  const [data,setData] = useState([])
  const toTable = async () =>{
    await GetThreadList().then(e=>{
      console.log(e.data.list)
      setData(e.data.list)
      this.setState({
        data:e.data.list,
        pagination:{
          total:e.data.pagination.total,
          pageSize:e.data.pagination.pageSize,
          current:e.data.pagination.current
        }
      })
    })
  }
  return (
    <div className="Thread">
      <Button type="primary" onClick={ () => toTable() }>get List</Button>
      <h1>get thread</h1>
      <Link to='/'><Button>路由</Button></Link>
      <Table dataSource={data}
             pagination={pagination}  
        
      >
    <ColumnGroup title="Name">
      <Column title="title" dataIndex="title" key="title" />
      <Column title="author" dataIndex="author" key="author" />
    </ColumnGroup>
    <Column title="reply_num" dataIndex="reply_num" key="reply_num" />
    <Column title="good" dataIndex="good" key="good" />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
    </div>
    
  )
}

export default Thread
